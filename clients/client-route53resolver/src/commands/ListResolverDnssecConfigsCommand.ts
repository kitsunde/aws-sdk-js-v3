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

import { ListResolverDnssecConfigsRequest, ListResolverDnssecConfigsResponse } from "../models/models_0";
import { de_ListResolverDnssecConfigsCommand, se_ListResolverDnssecConfigsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 *
 * The input for {@link ListResolverDnssecConfigsCommand}.
 */
export interface ListResolverDnssecConfigsCommandInput extends ListResolverDnssecConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverDnssecConfigsCommand}.
 */
export interface ListResolverDnssecConfigsCommandOutput extends ListResolverDnssecConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverDnssecConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverDnssecConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverDnssecConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListResolverDnssecConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverDnssecConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResolverDnssecConfigs: [ // ResolverDnssecConfigList
 * //     { // ResolverDnssecConfig
 * //       Id: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ValidationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverDnssecConfigsCommandInput - {@link ListResolverDnssecConfigsCommandInput}
 * @returns {@link ListResolverDnssecConfigsCommandOutput}
 * @see {@link ListResolverDnssecConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverDnssecConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class ListResolverDnssecConfigsCommand extends $Command<
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
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
  constructor(readonly input: ListResolverDnssecConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolverDnssecConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverDnssecConfigsCommand";
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
  private serialize(input: ListResolverDnssecConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResolverDnssecConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverDnssecConfigsCommandOutput> {
    return de_ListResolverDnssecConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
