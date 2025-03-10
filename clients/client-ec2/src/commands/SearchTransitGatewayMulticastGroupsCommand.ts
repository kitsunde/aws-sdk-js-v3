// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  SearchTransitGatewayMulticastGroupsRequest,
  SearchTransitGatewayMulticastGroupsResult,
} from "../models/models_6";
import {
  de_SearchTransitGatewayMulticastGroupsCommand,
  se_SearchTransitGatewayMulticastGroupsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link SearchTransitGatewayMulticastGroupsCommand}.
 */
export interface SearchTransitGatewayMulticastGroupsCommandInput extends SearchTransitGatewayMulticastGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchTransitGatewayMulticastGroupsCommand}.
 */
export interface SearchTransitGatewayMulticastGroupsCommandOutput
  extends SearchTransitGatewayMulticastGroupsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Searches one or more  transit gateway multicast groups and returns the group membership information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayMulticastGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayMulticastGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // SearchTransitGatewayMulticastGroupsRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new SearchTransitGatewayMulticastGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchTransitGatewayMulticastGroupsResult
 * //   MulticastGroups: [ // TransitGatewayMulticastGroupList
 * //     { // TransitGatewayMulticastGroup
 * //       GroupIpAddress: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       GroupMember: true || false,
 * //       GroupSource: true || false,
 * //       MemberType: "static" || "igmp",
 * //       SourceType: "static" || "igmp",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchTransitGatewayMulticastGroupsCommandInput - {@link SearchTransitGatewayMulticastGroupsCommandInput}
 * @returns {@link SearchTransitGatewayMulticastGroupsCommandOutput}
 * @see {@link SearchTransitGatewayMulticastGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayMulticastGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class SearchTransitGatewayMulticastGroupsCommand extends $Command<
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SearchTransitGatewayMulticastGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchTransitGatewayMulticastGroupsCommandInput, SearchTransitGatewayMulticastGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchTransitGatewayMulticastGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchTransitGatewayMulticastGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: SearchTransitGatewayMulticastGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SearchTransitGatewayMulticastGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchTransitGatewayMulticastGroupsCommandOutput> {
    return de_SearchTransitGatewayMulticastGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
