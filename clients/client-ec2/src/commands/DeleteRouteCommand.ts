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
import { DeleteRouteRequest } from "../models/models_2";
import { de_DeleteRouteCommand, se_DeleteRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandInput extends DeleteRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified route from the specified route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   DestinationIpv6CidrBlock: "STRING_VALUE",
 *   DestinationPrefixListId: "STRING_VALUE",
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteCommandInput - {@link DeleteRouteCommandInput}
 * @returns {@link DeleteRouteCommandOutput}
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To delete a route
 * ```javascript
 * // This example deletes the specified route from the specified route table.
 * const input = {
 *   "DestinationCidrBlock": "0.0.0.0/0",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new DeleteRouteCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-route-1
 * ```
 *
 */
export class DeleteRouteCommand extends $Command<
  DeleteRouteCommandInput,
  DeleteRouteCommandOutput,
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
  constructor(readonly input: DeleteRouteCommandInput) {
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
  ): Handler<DeleteRouteCommandInput, DeleteRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteRouteCommand";
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
  private serialize(input: DeleteRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRouteCommandOutput> {
    return de_DeleteRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
