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
import { DeleteFaqRequest } from "../models/models_0";
import { de_DeleteFaqCommand, se_DeleteFaqCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteFaqCommand}.
 */
export interface DeleteFaqCommandInput extends DeleteFaqRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFaqCommand}.
 */
export interface DeleteFaqCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Removes an FAQ from an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DeleteFaqRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFaqCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFaqCommandInput - {@link DeleteFaqCommandInput}
 * @returns {@link DeleteFaqCommandOutput}
 * @see {@link DeleteFaqCommandInput} for command's `input` shape.
 * @see {@link DeleteFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
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
export class DeleteFaqCommand extends $Command<
  DeleteFaqCommandInput,
  DeleteFaqCommandOutput,
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
  constructor(readonly input: DeleteFaqCommandInput) {
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
  ): Handler<DeleteFaqCommandInput, DeleteFaqCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteFaqCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DeleteFaqCommand";
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
  private serialize(input: DeleteFaqCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFaqCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFaqCommandOutput> {
    return de_DeleteFaqCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
