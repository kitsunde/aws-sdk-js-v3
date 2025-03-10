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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import {
  de_DisableKinesisStreamingDestinationCommand,
  se_DisableKinesisStreamingDestinationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DisableKinesisStreamingDestinationCommand}.
 */
export interface DisableKinesisStreamingDestinationCommandInput extends KinesisStreamingDestinationInput {}
/**
 * @public
 *
 * The output of {@link DisableKinesisStreamingDestinationCommand}.
 */
export interface DisableKinesisStreamingDestinationCommandOutput
  extends KinesisStreamingDestinationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
 *             without deleting either of the resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DisableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DisableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // KinesisStreamingDestinationInput
 *   TableName: "STRING_VALUE", // required
 *   StreamArn: "STRING_VALUE", // required
 * };
 * const command = new DisableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * // { // KinesisStreamingDestinationOutput
 * //   TableName: "STRING_VALUE",
 * //   StreamArn: "STRING_VALUE",
 * //   DestinationStatus: "ENABLING" || "ACTIVE" || "DISABLING" || "DISABLED" || "ENABLE_FAILED",
 * // };
 *
 * ```
 *
 * @param DisableKinesisStreamingDestinationCommandInput - {@link DisableKinesisStreamingDestinationCommandInput}
 * @returns {@link DisableKinesisStreamingDestinationCommandOutput}
 * @see {@link DisableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DisableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DisableKinesisStreamingDestinationCommand extends $Command<
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
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
  constructor(readonly input: DisableKinesisStreamingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableKinesisStreamingDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DisableKinesisStreamingDestinationCommand";
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
  private serialize(
    input: DisableKinesisStreamingDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableKinesisStreamingDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableKinesisStreamingDestinationCommandOutput> {
    return de_DisableKinesisStreamingDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
