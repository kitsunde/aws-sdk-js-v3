import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/models_1";
import {
  deserializeAws_queryModifyDBInstanceCommand,
  serializeAws_queryModifyDBInstanceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ModifyDBInstanceCommandInput extends ModifyDBInstanceMessage {}
export interface ModifyDBInstanceCommandOutput extends ModifyDBInstanceResult, __MetadataBearer {}

/**
 * <p>Modifies settings for a DB instance.
 *           You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
 *             To learn what modifications you can make to your DB instance,
 *             call <code>DescribeValidDBInstanceModifications</code>
 *             before you call <code>ModifyDBInstance</code>.
 *       </p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyDBInstanceCommand extends $Command<
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBInstanceCommandOutput> {
    return deserializeAws_queryModifyDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
