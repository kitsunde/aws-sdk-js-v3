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
import { DeleteTransitGatewayRouteTableRequest, DeleteTransitGatewayRouteTableResult } from "../models/models_3";
import {
  de_DeleteTransitGatewayRouteTableCommand,
  se_DeleteTransitGatewayRouteTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayRouteTableCommand}.
 */
export interface DeleteTransitGatewayRouteTableCommandInput extends DeleteTransitGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayRouteTableCommand}.
 */
export interface DeleteTransitGatewayRouteTableCommandOutput
  extends DeleteTransitGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified transit gateway route table. You must disassociate the route table from any
 *           transit gateway route tables before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayRouteTableResult
 * //   TransitGatewayRouteTable: { // TransitGatewayRouteTable
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     DefaultAssociationRouteTable: true || false,
 * //     DefaultPropagationRouteTable: true || false,
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayRouteTableCommandInput - {@link DeleteTransitGatewayRouteTableCommandInput}
 * @returns {@link DeleteTransitGatewayRouteTableCommandOutput}
 * @see {@link DeleteTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTransitGatewayRouteTableCommand extends $Command<
  DeleteTransitGatewayRouteTableCommandInput,
  DeleteTransitGatewayRouteTableCommandOutput,
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
  constructor(readonly input: DeleteTransitGatewayRouteTableCommandInput) {
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
  ): Handler<DeleteTransitGatewayRouteTableCommandInput, DeleteTransitGatewayRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransitGatewayRouteTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayRouteTableCommand";
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
    input: DeleteTransitGatewayRouteTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteTransitGatewayRouteTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayRouteTableCommandOutput> {
    return de_DeleteTransitGatewayRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
