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
import { CreateGlobalTableInput, CreateGlobalTableOutput } from "../models/models_0";
import { de_CreateGlobalTableCommand, se_CreateGlobalTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link CreateGlobalTableCommand}.
 */
export interface CreateGlobalTableCommandInput extends CreateGlobalTableInput {}
/**
 * @public
 *
 * The output of {@link CreateGlobalTableCommand}.
 */
export interface CreateGlobalTableCommandOutput extends CreateGlobalTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a global table from an existing table. A global table creates a replication
 *             relationship between two or more DynamoDB tables with the same table name in the
 *             provided Regions. </p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                 2017.11.29 (Legacy)</a> of global tables. We recommend using
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 *          <p>If you want to add a new replica table to a global table, each of the following
 *             conditions must be true:</p>
 *          <ul>
 *             <li>
 *                <p>The table must have the same primary key as all of the other replicas.</p>
 *             </li>
 *             <li>
 *                <p>The table must have the same name as all of the other replicas.</p>
 *             </li>
 *             <li>
 *                <p>The table must have DynamoDB Streams enabled, with the stream containing both
 *                     the new and the old images of the item.</p>
 *             </li>
 *             <li>
 *                <p>None of the replica tables in the global table can contain any data.</p>
 *             </li>
 *          </ul>
 *          <p> If global secondary indexes are specified, then the following conditions must also be
 *             met: </p>
 *          <ul>
 *             <li>
 *                <p> The global secondary indexes must have the same name. </p>
 *             </li>
 *             <li>
 *                <p> The global secondary indexes must have the same hash key and sort key (if
 *                     present). </p>
 *             </li>
 *          </ul>
 *          <p> If local secondary indexes are specified, then the following conditions must also be
 *             met: </p>
 *          <ul>
 *             <li>
 *                <p> The local secondary indexes must have the same name. </p>
 *             </li>
 *             <li>
 *                <p> The local secondary indexes must have the same hash key and sort key (if
 *                     present). </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p> Write capacity settings should be set consistently across your replica tables and
 *                 secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the
 *                 write capacity settings for all of your global tables replicas and indexes. </p>
 *             <p> If you prefer to manage write capacity settings manually, you should provision
 *                 equal replicated write capacity units to your replica tables. You should also
 *                 provision equal replicated write capacity units to matching secondary indexes across
 *                 your global table. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // CreateGlobalTableInput
 *   GlobalTableName: "STRING_VALUE", // required
 *   ReplicationGroup: [ // ReplicaList // required
 *     { // Replica
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateGlobalTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalTableOutput
 * //   GlobalTableDescription: { // GlobalTableDescription
 * //     ReplicationGroup: [ // ReplicaDescriptionList
 * //       { // ReplicaDescription
 * //         RegionName: "STRING_VALUE",
 * //         ReplicaStatus: "CREATING" || "CREATION_FAILED" || "UPDATING" || "DELETING" || "ACTIVE" || "REGION_DISABLED" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
 * //         ReplicaStatusDescription: "STRING_VALUE",
 * //         ReplicaStatusPercentProgress: "STRING_VALUE",
 * //         KMSMasterKeyId: "STRING_VALUE",
 * //         ProvisionedThroughputOverride: { // ProvisionedThroughputOverride
 * //           ReadCapacityUnits: Number("long"),
 * //         },
 * //         GlobalSecondaryIndexes: [ // ReplicaGlobalSecondaryIndexDescriptionList
 * //           { // ReplicaGlobalSecondaryIndexDescription
 * //             IndexName: "STRING_VALUE",
 * //             ProvisionedThroughputOverride: {
 * //               ReadCapacityUnits: Number("long"),
 * //             },
 * //           },
 * //         ],
 * //         ReplicaInaccessibleDateTime: new Date("TIMESTAMP"),
 * //         ReplicaTableClassSummary: { // TableClassSummary
 * //           TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 * //           LastUpdateDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //     GlobalTableArn: "STRING_VALUE",
 * //     CreationDateTime: new Date("TIMESTAMP"),
 * //     GlobalTableStatus: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING",
 * //     GlobalTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGlobalTableCommandInput - {@link CreateGlobalTableCommandInput}
 * @returns {@link CreateGlobalTableCommandOutput}
 * @see {@link CreateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link GlobalTableAlreadyExistsException} (client fault)
 *  <p>The specified global table already exists.</p>
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
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class CreateGlobalTableCommand extends $Command<
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
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
  constructor(readonly input: CreateGlobalTableCommandInput) {
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
  ): Handler<CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGlobalTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "CreateGlobalTableCommand";
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
  private serialize(input: CreateGlobalTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGlobalTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGlobalTableCommandOutput> {
    return de_CreateGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
