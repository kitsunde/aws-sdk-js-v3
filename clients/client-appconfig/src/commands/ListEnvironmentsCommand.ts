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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  Environments,
  EnvironmentsFilterSensitiveLog,
  ListEnvironmentsRequest,
  ListEnvironmentsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEnvironmentsCommand,
  serializeAws_restJson1ListEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
export interface ListEnvironmentsCommandOutput extends Environments, __MetadataBearer {}

/**
 * <p>Lists the environments for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListEnvironmentsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListEnvironmentsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class ListEnvironmentsCommand extends $Command<
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentsCommandOutput> {
    return deserializeAws_restJson1ListEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
