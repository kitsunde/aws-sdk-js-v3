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
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/models_0";
import { de_RetryStageExecutionCommand, se_RetryStageExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RetryStageExecutionCommand}.
 */
export interface RetryStageExecutionCommandInput extends RetryStageExecutionInput {}
/**
 * @public
 *
 * The output of {@link RetryStageExecutionCommand}.
 */
export interface RetryStageExecutionCommandOutput extends RetryStageExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
 *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
 *             all actions that are still in progress continue working, and failed actions are
 *             triggered again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RetryStageExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RetryStageExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // RetryStageExecutionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   retryMode: "STRING_VALUE", // required
 * };
 * const command = new RetryStageExecutionCommand(input);
 * const response = await client.send(command);
 * // { // RetryStageExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryStageExecutionCommandInput - {@link RetryStageExecutionCommandInput}
 * @returns {@link RetryStageExecutionCommandOutput}
 * @see {@link RetryStageExecutionCommandInput} for command's `input` shape.
 * @see {@link RetryStageExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link NotLatestPipelineExecutionException} (client fault)
 *  <p>The stage has failed in a later run of the pipeline and the pipelineExecutionId
 *             associated with the request is out of date.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotRetryableException} (client fault)
 *  <p>Unable to retry. The pipeline structure or stage state might have changed while
 *             actions awaited retry, or the stage contains no failed
 *             actions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class RetryStageExecutionCommand extends $Command<
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
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
  constructor(readonly input: RetryStageExecutionCommandInput) {
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
  ): Handler<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetryStageExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "RetryStageExecutionCommand";
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
  private serialize(input: RetryStageExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RetryStageExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetryStageExecutionCommandOutput> {
    return de_RetryStageExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
