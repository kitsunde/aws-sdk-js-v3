import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateInferenceSchedulerRequest } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateInferenceSchedulerCommand,
  serializeAws_json1_0UpdateInferenceSchedulerCommand,
} from "../protocols/Aws_json1_0";
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

export interface UpdateInferenceSchedulerCommandInput extends UpdateInferenceSchedulerRequest {}
export interface UpdateInferenceSchedulerCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an inference scheduler. </p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new UpdateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateInferenceSchedulerCommand extends $Command<
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInferenceSchedulerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInferenceSchedulerCommandInput, UpdateInferenceSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "UpdateInferenceSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInferenceSchedulerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateInferenceSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateInferenceSchedulerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInferenceSchedulerCommandOutput> {
    return deserializeAws_json1_0UpdateInferenceSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
