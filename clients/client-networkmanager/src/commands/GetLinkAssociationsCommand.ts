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

import { GetLinkAssociationsRequest, GetLinkAssociationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetLinkAssociationsCommand, se_GetLinkAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetLinkAssociationsCommand}.
 */
export interface GetLinkAssociationsCommandInput extends GetLinkAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLinkAssociationsCommand}.
 */
export interface GetLinkAssociationsCommandOutput extends GetLinkAssociationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
 *             must be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinkAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinkAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetLinkAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE",
 *   LinkId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLinkAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkAssociationsResponse
 * //   LinkAssociations: [ // LinkAssociationList
 * //     { // LinkAssociation
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       LinkId: "STRING_VALUE",
 * //       LinkAssociationState: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinkAssociationsCommandInput - {@link GetLinkAssociationsCommandInput}
 * @returns {@link GetLinkAssociationsCommandOutput}
 * @see {@link GetLinkAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetLinkAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class GetLinkAssociationsCommand extends $Command<
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: GetLinkAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLinkAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetLinkAssociationsCommand";
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
  private serialize(input: GetLinkAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLinkAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLinkAssociationsCommandOutput> {
    return de_GetLinkAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
