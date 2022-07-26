// smithy-typescript generated code
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
  DeleteTransitGatewayRouteTableAnnouncementRequest,
  DeleteTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog,
  DeleteTransitGatewayRouteTableAnnouncementResult,
  DeleteTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteTransitGatewayRouteTableAnnouncementCommand,
  serializeAws_ec2DeleteTransitGatewayRouteTableAnnouncementCommand,
} from "../protocols/Aws_ec2";

export interface DeleteTransitGatewayRouteTableAnnouncementCommandInput
  extends DeleteTransitGatewayRouteTableAnnouncementRequest {}
export interface DeleteTransitGatewayRouteTableAnnouncementCommandOutput
  extends DeleteTransitGatewayRouteTableAnnouncementResult,
    __MetadataBearer {}

/**
 * <p>Advertises to the transit gateway that a transit gateway route table is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableAnnouncementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableAnnouncementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayRouteTableAnnouncementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteTransitGatewayRouteTableAnnouncementCommand extends $Command<
  DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTransitGatewayRouteTableAnnouncementCommandInput) {
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
  ): Handler<
    DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    DeleteTransitGatewayRouteTableAnnouncementCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayRouteTableAnnouncementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTransitGatewayRouteTableAnnouncementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayRouteTableAnnouncementCommandOutput> {
    return deserializeAws_ec2DeleteTransitGatewayRouteTableAnnouncementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
