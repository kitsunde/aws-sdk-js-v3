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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  DisassociateGatewayFromServerInput,
  DisassociateGatewayFromServerInputFilterSensitiveLog,
  DisassociateGatewayFromServerOutput,
  DisassociateGatewayFromServerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DisassociateGatewayFromServerCommand,
  serializeAws_json1_0DisassociateGatewayFromServerCommand,
} from "../protocols/Aws_json1_0";

export interface DisassociateGatewayFromServerCommandInput extends DisassociateGatewayFromServerInput {}
export interface DisassociateGatewayFromServerCommandOutput
  extends DisassociateGatewayFromServerOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a backup gateway from the specified server. After the disassociation process
 *       finishes, the gateway can no longer access the virtual machines on the server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DisassociateGatewayFromServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DisassociateGatewayFromServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new DisassociateGatewayFromServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateGatewayFromServerCommandInput} for command's `input` shape.
 * @see {@link DisassociateGatewayFromServerCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class DisassociateGatewayFromServerCommand extends $Command<
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
  BackupGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateGatewayFromServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateGatewayFromServerCommandInput, DisassociateGatewayFromServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "DisassociateGatewayFromServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateGatewayFromServerInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateGatewayFromServerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateGatewayFromServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DisassociateGatewayFromServerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateGatewayFromServerCommandOutput> {
    return deserializeAws_json1_0DisassociateGatewayFromServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
