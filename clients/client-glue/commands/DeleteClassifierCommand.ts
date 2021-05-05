import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteClassifierRequest, DeleteClassifierResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteClassifierCommand,
  serializeAws_json1_1DeleteClassifierCommand,
} from "../protocols/Aws_json1_1";
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

export interface DeleteClassifierCommandInput extends DeleteClassifierRequest {}
export interface DeleteClassifierCommandOutput extends DeleteClassifierResponse, __MetadataBearer {}

/**
 * <p>Removes a classifier from the Data Catalog.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClassifierCommandInput} for command's `input` shape.
 * @see {@link DeleteClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteClassifierCommand extends $Command<
  DeleteClassifierCommandInput,
  DeleteClassifierCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClassifierCommandInput, DeleteClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClassifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteClassifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteClassifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClassifierCommandOutput> {
    return deserializeAws_json1_1DeleteClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
