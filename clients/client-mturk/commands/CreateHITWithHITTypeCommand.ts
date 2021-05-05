import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITWithHITTypeRequest, CreateHITWithHITTypeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateHITWithHITTypeCommand,
  serializeAws_json1_1CreateHITWithHITTypeCommand,
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

export interface CreateHITWithHITTypeCommandInput extends CreateHITWithHITTypeRequest {}
export interface CreateHITWithHITTypeCommandOutput extends CreateHITWithHITTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT)
 *             using an existing HITTypeID generated by the <code>CreateHITType</code> operation.
 *         </p>
 *         <p>
 *             This is an alternative way to create HITs from the <code>CreateHIT</code> operation.
 *             This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *         <p>CreateHITWithHITType also supports several ways to provide question data:
 *             by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT,
 *             or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *         <note>
 *             <p>
 *                 If a HIT is created with 10 or more maximum assignments, there is an additional fee.
 *                 For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.
 *             </p>
 *         </note>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITWithHITTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITWithHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateHITWithHITTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHITWithHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITWithHITTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHITWithHITTypeCommand extends $Command<
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHITWithHITTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHITWithHITTypeCommandInput, CreateHITWithHITTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateHITWithHITTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHITWithHITTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHITWithHITTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHITWithHITTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHITWithHITTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHITWithHITTypeCommandOutput> {
    return deserializeAws_json1_1CreateHITWithHITTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
