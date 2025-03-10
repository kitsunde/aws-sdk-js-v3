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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunRequest, GetJobRunResponse } from "../models/models_1";
import { de_GetJobRunCommand, se_GetJobRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandInput extends GetJobRunRequest {}
/**
 * @public
 *
 * The output of {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandOutput extends GetJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the metadata for a given job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetJobRunRequest
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 *   PredecessorsIncluded: true || false,
 * };
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetJobRunResponse
 * //   JobRun: { // JobRun
 * //     Id: "STRING_VALUE",
 * //     Attempt: Number("int"),
 * //     PreviousRunId: "STRING_VALUE",
 * //     TriggerName: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     StartedOn: new Date("TIMESTAMP"),
 * //     LastModifiedOn: new Date("TIMESTAMP"),
 * //     CompletedOn: new Date("TIMESTAMP"),
 * //     JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //     Arguments: { // GenericMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ErrorMessage: "STRING_VALUE",
 * //     PredecessorRuns: [ // PredecessorList
 * //       { // Predecessor
 * //         JobName: "STRING_VALUE",
 * //         RunId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AllocatedCapacity: Number("int"),
 * //     ExecutionTime: Number("int"),
 * //     Timeout: Number("int"),
 * //     MaxCapacity: Number("double"),
 * //     WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X",
 * //     NumberOfWorkers: Number("int"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     LogGroupName: "STRING_VALUE",
 * //     NotificationProperty: { // NotificationProperty
 * //       NotifyDelayAfter: Number("int"),
 * //     },
 * //     GlueVersion: "STRING_VALUE",
 * //     DPUSeconds: Number("double"),
 * //     ExecutionClass: "FLEX" || "STANDARD",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobRunCommandInput - {@link GetJobRunCommandInput}
 * @returns {@link GetJobRunCommandOutput}
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetJobRunCommand extends $Command<
  GetJobRunCommandInput,
  GetJobRunCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetJobRunCommandInput) {
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
  ): Handler<GetJobRunCommandInput, GetJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetJobRunCommand";
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
  private serialize(input: GetJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobRunCommandOutput> {
    return de_GetJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
