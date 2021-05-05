import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetSoftwareUpdatesCommand,
  serializeAws_json1_1GetSoftwareUpdatesCommand,
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

export interface GetSoftwareUpdatesCommandInput extends GetSoftwareUpdatesRequest {}
export interface GetSoftwareUpdatesCommandOutput extends GetSoftwareUpdatesResult, __MetadataBearer {}

/**
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *       <code>JobId</code>.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSoftwareUpdatesCommand extends $Command<
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSoftwareUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSoftwareUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSoftwareUpdatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSoftwareUpdatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSoftwareUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSoftwareUpdatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSoftwareUpdatesCommandOutput> {
    return deserializeAws_json1_1GetSoftwareUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
