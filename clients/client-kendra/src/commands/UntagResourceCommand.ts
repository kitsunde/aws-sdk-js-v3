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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_1";
import { de_UntagResourceCommand, se_UntagResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes a tag from an index, FAQ, or a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UntagResourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UntagResourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // UntagResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagResourceCommandInput - {@link UntagResourceCommandInput}
 * @returns {@link UntagResourceCommandOutput}
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The resource you want to use isn't available. Please check you have provided the
 *             correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class UntagResourceCommand extends $Command<
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: UntagResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagResourceCommandInput, UntagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UntagResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UntagResourceCommand";
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
  private serialize(input: UntagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UntagResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagResourceCommandOutput> {
    return de_UntagResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
