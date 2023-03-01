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

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import {
  GetRecordsInput,
  GetRecordsInputFilterSensitiveLog,
  GetRecordsOutput,
  GetRecordsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetRecordsCommand,
  serializeAws_json1_0GetRecordsCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandInput extends GetRecordsInput {}
/**
 * The output of {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandOutput extends GetRecordsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the stream records from a given shard.</p>
 *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator
 *       specifies the position in the shard from which you want to start reading stream records
 *       sequentially. If there are no stream records available in the portion of the shard that the
 *       iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take
 *       multiple calls to get to a portion of the shard that contains stream records.</p>
 *          <note>
 *             <p>
 *                <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records,
 *         whichever comes first.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetRecordsCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetRecordsCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 *
 * @example To retrieve all the stream records from a shard
 * ```javascript
 * // The following example retrieves all the stream records from a shard.
 * const input = {
 *   "ShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ..."
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAGQBYshYDEe ... <remaining characters omitted> ...",
 *   "Records": [
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480646E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 3"
 *           }
 *         },
 *         "SequenceNumber": "300000000000000499659",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "e2fd9c34eff2d779b297b26f5fef4206",
 *       "eventName": "INSERT",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     },
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480527E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 1"
 *           }
 *         },
 *         "SequenceNumber": "400000000000000499660",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "4b25bd0da9a181a155114127e4837252",
 *       "eventName": "MODIFY",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     },
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480646E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 2"
 *           }
 *         },
 *         "SequenceNumber": "500000000000000499661",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "740280c73a3df7842edab3548a1b08ad",
 *       "eventName": "REMOVE",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class GetRecordsCommand extends $Command<
  GetRecordsCommandInput,
  GetRecordsCommandOutput,
  DynamoDBStreamsClientResolvedConfig
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

  constructor(readonly input: GetRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecordsCommandInput, GetRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "GetRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecordsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetRecordsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecordsCommandOutput> {
    return deserializeAws_json1_0GetRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
