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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeleteCustomActionTypeInput } from "../models/models_0";
import { de_DeleteCustomActionTypeCommand, se_DeleteCustomActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteCustomActionTypeCommand}.
 */
export interface DeleteCustomActionTypeCommandInput extends DeleteCustomActionTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteCustomActionTypeCommand}.
 */
export interface DeleteCustomActionTypeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
 *             fails after the action is marked for deletion. Used for custom actions only.</p>
 *         <important>
 *             <p>To re-create a custom action after it has been deleted you must use a string in
 *                 the version field that has never been used before. This string can be an incremented
 *                 version number, for example. To restore a deleted custom action, use a JSON file
 *                 that is identical to the deleted action, including the original string in the
 *                 version field.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // DeleteCustomActionTypeInput
 *   category: "STRING_VALUE", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomActionTypeCommandInput - {@link DeleteCustomActionTypeCommandInput}
 * @returns {@link DeleteCustomActionTypeCommandOutput}
 * @see {@link DeleteCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class DeleteCustomActionTypeCommand extends $Command<
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: DeleteCustomActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomActionTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DeleteCustomActionTypeCommand";
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
  private serialize(input: DeleteCustomActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomActionTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomActionTypeCommandOutput> {
    return de_DeleteCustomActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
