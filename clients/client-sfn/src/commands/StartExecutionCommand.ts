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

import { StartExecutionInput, StartExecutionInputFilterSensitiveLog, StartExecutionOutput } from "../models/models_0";
import { de_StartExecutionCommand, se_StartExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 *
 * The input for {@link StartExecutionCommand}.
 */
export interface StartExecutionCommandInput extends StartExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartExecutionCommand}.
 */
export interface StartExecutionCommandOutput extends StartExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
 *
 *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
 *
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a
 *           <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same
 *         name and input as a running execution, the call will succeed and return the same response as
 *         the original request. If the execution is closed or if the input is different, it will
 *         return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p>
 *             <p>
 *                <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // StartExecutionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   traceHeader: "STRING_VALUE",
 * };
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartExecutionOutput
 * //   executionArn: "STRING_VALUE", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartExecutionCommandInput - {@link StartExecutionCommandInput}
 * @returns {@link StartExecutionCommandOutput}
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionAlreadyExists} (client fault)
 *  <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 *
 * @throws {@link ExecutionLimitExceeded} (client fault)
 *  <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *  <p>The provided JSON input data is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class StartExecutionCommand extends $Command<
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
  SFNClientResolvedConfig
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
  constructor(readonly input: StartExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartExecutionCommandInput, StartExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExecutionInputFilterSensitiveLog,
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
  private serialize(input: StartExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExecutionCommandOutput> {
    return de_StartExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
