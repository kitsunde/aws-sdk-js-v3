import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateRevisionRequest, CreateRevisionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRevisionCommand,
  serializeAws_restJson1CreateRevisionCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateRevisionCommandInput extends CreateRevisionRequest {}
export interface CreateRevisionCommandOutput extends CreateRevisionResponse, __MetadataBearer {}

/**
 * <p>This operation creates a revision for a data set.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CreateRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRevisionCommandInput} for command's `input` shape.
 * @see {@link CreateRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRevisionCommand extends $Command<
  CreateRevisionCommandInput,
  CreateRevisionCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRevisionCommandInput, CreateRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "CreateRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRevisionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRevisionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRevisionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRevisionCommandOutput> {
    return deserializeAws_restJson1CreateRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
