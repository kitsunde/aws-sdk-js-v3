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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { CreateFlowRequest, CreateFlowResponse } from "../models/models_0";
import { de_CreateFlowCommand, se_CreateFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandInput extends CreateFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandOutput extends CreateFlowResponse, __MetadataBearer {}

/**
 * @public
 * <p> Enables your application to create a new flow using Amazon AppFlow. You must create
 *       a connector profile before calling this API. Please note that the Request Syntax below shows
 *       syntax for multiple destinations, however, you can only transfer data to one item in this list
 *       at a time. Amazon AppFlow does not currently support flows to multiple destinations at
 *       once. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CreateFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CreateFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // CreateFlowRequest
 *   flowName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   kmsArn: "STRING_VALUE",
 *   triggerConfig: { // TriggerConfig
 *     triggerType: "Scheduled" || "Event" || "OnDemand", // required
 *     triggerProperties: { // TriggerProperties
 *       Scheduled: { // ScheduledTriggerProperties
 *         scheduleExpression: "STRING_VALUE", // required
 *         dataPullMode: "Incremental" || "Complete",
 *         scheduleStartTime: new Date("TIMESTAMP"),
 *         scheduleEndTime: new Date("TIMESTAMP"),
 *         timezone: "STRING_VALUE",
 *         scheduleOffset: Number("long"),
 *         firstExecutionFrom: new Date("TIMESTAMP"),
 *         flowErrorDeactivationThreshold: Number("int"),
 *       },
 *     },
 *   },
 *   sourceFlowConfig: { // SourceFlowConfig
 *     connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot", // required
 *     apiVersion: "STRING_VALUE",
 *     connectorProfileName: "STRING_VALUE",
 *     sourceConnectorProperties: { // SourceConnectorProperties
 *       Amplitude: { // AmplitudeSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Datadog: { // DatadogSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Dynatrace: { // DynatraceSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       GoogleAnalytics: { // GoogleAnalyticsSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       InforNexus: { // InforNexusSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Marketo: { // MarketoSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       S3: { // S3SourceProperties
 *         bucketName: "STRING_VALUE", // required
 *         bucketPrefix: "STRING_VALUE",
 *         s3InputFormatConfig: { // S3InputFormatConfig
 *           s3InputFileType: "CSV" || "JSON",
 *         },
 *       },
 *       Salesforce: { // SalesforceSourceProperties
 *         object: "STRING_VALUE", // required
 *         enableDynamicFieldUpdate: true || false,
 *         includeDeletedRecords: true || false,
 *         dataTransferApi: "AUTOMATIC" || "BULKV2" || "REST_SYNC",
 *       },
 *       ServiceNow: { // ServiceNowSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Singular: { // SingularSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Slack: { // SlackSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Trendmicro: { // TrendmicroSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       Veeva: { // VeevaSourceProperties
 *         object: "STRING_VALUE", // required
 *         documentType: "STRING_VALUE",
 *         includeSourceFiles: true || false,
 *         includeRenditions: true || false,
 *         includeAllVersions: true || false,
 *       },
 *       Zendesk: { // ZendeskSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *       SAPOData: { // SAPODataSourceProperties
 *         objectPath: "STRING_VALUE",
 *       },
 *       CustomConnector: { // CustomConnectorSourceProperties
 *         entityName: "STRING_VALUE", // required
 *         customProperties: { // CustomProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       Pardot: { // PardotSourceProperties
 *         object: "STRING_VALUE", // required
 *       },
 *     },
 *     incrementalPullConfig: { // IncrementalPullConfig
 *       datetimeTypeFieldName: "STRING_VALUE",
 *     },
 *   },
 *   destinationFlowConfigList: [ // DestinationFlowConfigList // required
 *     { // DestinationFlowConfig
 *       connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot", // required
 *       apiVersion: "STRING_VALUE",
 *       connectorProfileName: "STRING_VALUE",
 *       destinationConnectorProperties: { // DestinationConnectorProperties
 *         Redshift: { // RedshiftDestinationProperties
 *           object: "STRING_VALUE", // required
 *           intermediateBucketName: "STRING_VALUE", // required
 *           bucketPrefix: "STRING_VALUE",
 *           errorHandlingConfig: { // ErrorHandlingConfig
 *             failOnFirstDestinationError: true || false,
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *         },
 *         S3: { // S3DestinationProperties
 *           bucketName: "STRING_VALUE", // required
 *           bucketPrefix: "STRING_VALUE",
 *           s3OutputFormatConfig: { // S3OutputFormatConfig
 *             fileType: "CSV" || "JSON" || "PARQUET",
 *             prefixConfig: { // PrefixConfig
 *               prefixType: "FILENAME" || "PATH" || "PATH_AND_FILENAME",
 *               prefixFormat: "YEAR" || "MONTH" || "DAY" || "HOUR" || "MINUTE",
 *               pathPrefixHierarchy: [ // PathPrefixHierarchy
 *                 "EXECUTION_ID" || "SCHEMA_VERSION",
 *               ],
 *             },
 *             aggregationConfig: { // AggregationConfig
 *               aggregationType: "None" || "SingleFile",
 *               targetFileSize: Number("long"),
 *             },
 *             preserveSourceDataTyping: true || false,
 *           },
 *         },
 *         Salesforce: { // SalesforceDestinationProperties
 *           object: "STRING_VALUE", // required
 *           idFieldNames: [ // IdFieldNameList
 *             "STRING_VALUE",
 *           ],
 *           errorHandlingConfig: {
 *             failOnFirstDestinationError: true || false,
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *           writeOperationType: "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 *           dataTransferApi: "AUTOMATIC" || "BULKV2" || "REST_SYNC",
 *         },
 *         Snowflake: { // SnowflakeDestinationProperties
 *           object: "STRING_VALUE", // required
 *           intermediateBucketName: "STRING_VALUE", // required
 *           bucketPrefix: "STRING_VALUE",
 *           errorHandlingConfig: {
 *             failOnFirstDestinationError: true || false,
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *         },
 *         EventBridge: { // EventBridgeDestinationProperties
 *           object: "STRING_VALUE", // required
 *           errorHandlingConfig: {
 *             failOnFirstDestinationError: true || false,
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *         },
 *         LookoutMetrics: {},
 *         Upsolver: { // UpsolverDestinationProperties
 *           bucketName: "STRING_VALUE", // required
 *           bucketPrefix: "STRING_VALUE",
 *           s3OutputFormatConfig: { // UpsolverS3OutputFormatConfig
 *             fileType: "CSV" || "JSON" || "PARQUET",
 *             prefixConfig: {
 *               prefixType: "FILENAME" || "PATH" || "PATH_AND_FILENAME",
 *               prefixFormat: "YEAR" || "MONTH" || "DAY" || "HOUR" || "MINUTE",
 *               pathPrefixHierarchy: [
 *                 "EXECUTION_ID" || "SCHEMA_VERSION",
 *               ],
 *             },
 *             aggregationConfig: {
 *               aggregationType: "None" || "SingleFile",
 *               targetFileSize: Number("long"),
 *             },
 *           },
 *         },
 *         Honeycode: { // HoneycodeDestinationProperties
 *           object: "STRING_VALUE", // required
 *           errorHandlingConfig: {
 *             failOnFirstDestinationError: true || false,
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *         },
 *         CustomerProfiles: { // CustomerProfilesDestinationProperties
 *           domainName: "STRING_VALUE", // required
 *           objectTypeName: "STRING_VALUE",
 *         },
 *         Zendesk: { // ZendeskDestinationProperties
 *           object: "STRING_VALUE", // required
 *           idFieldNames: [
 *             "STRING_VALUE",
 *           ],
 *           errorHandlingConfig: "<ErrorHandlingConfig>",
 *           writeOperationType: "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 *         },
 *         Marketo: { // MarketoDestinationProperties
 *           object: "STRING_VALUE", // required
 *           errorHandlingConfig: "<ErrorHandlingConfig>",
 *         },
 *         CustomConnector: { // CustomConnectorDestinationProperties
 *           entityName: "STRING_VALUE", // required
 *           errorHandlingConfig: "<ErrorHandlingConfig>",
 *           writeOperationType: "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 *           idFieldNames: [
 *             "STRING_VALUE",
 *           ],
 *           customProperties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         SAPOData: { // SAPODataDestinationProperties
 *           objectPath: "STRING_VALUE", // required
 *           successResponseHandlingConfig: { // SuccessResponseHandlingConfig
 *             bucketPrefix: "STRING_VALUE",
 *             bucketName: "STRING_VALUE",
 *           },
 *           idFieldNames: [
 *             "STRING_VALUE",
 *           ],
 *           errorHandlingConfig: "<ErrorHandlingConfig>",
 *           writeOperationType: "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 *         },
 *       },
 *     },
 *   ],
 *   tasks: [ // Tasks // required
 *     { // Task
 *       sourceFields: [ // SourceFields // required
 *         "STRING_VALUE",
 *       ],
 *       connectorOperator: { // ConnectorOperator
 *         Amplitude: "BETWEEN",
 *         Datadog: "PROJECTION" || "BETWEEN" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Dynatrace: "PROJECTION" || "BETWEEN" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         GoogleAnalytics: "PROJECTION" || "BETWEEN",
 *         InforNexus: "PROJECTION" || "BETWEEN" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Marketo: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         S3: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Salesforce: "PROJECTION" || "LESS_THAN" || "CONTAINS" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         ServiceNow: "PROJECTION" || "CONTAINS" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Singular: "PROJECTION" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Slack: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Trendmicro: "PROJECTION" || "EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Veeva: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "CONTAINS" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Zendesk: "PROJECTION" || "GREATER_THAN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         SAPOData: "PROJECTION" || "LESS_THAN" || "CONTAINS" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         CustomConnector: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "CONTAINS" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         Pardot: "PROJECTION" || "EQUAL_TO" || "NO_OP" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC",
 *       },
 *       destinationField: "STRING_VALUE",
 *       taskType: "Arithmetic" || "Filter" || "Map" || "Map_all" || "Mask" || "Merge" || "Passthrough" || "Truncate" || "Validate" || "Partition", // required
 *       taskProperties: { // TaskPropertiesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   metadataCatalogConfig: { // MetadataCatalogConfig
 *     glueDataCatalog: { // GlueDataCatalogConfig
 *       roleArn: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *       tablePrefix: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowResponse
 * //   flowArn: "STRING_VALUE",
 * //   flowStatus: "Active" || "Deprecated" || "Deleted" || "Draft" || "Errored" || "Suspended",
 * // };
 *
 * ```
 *
 * @param CreateFlowCommandInput - {@link CreateFlowCommandInput}
 * @returns {@link CreateFlowCommandOutput}
 * @see {@link CreateFlowCommandInput} for command's `input` shape.
 * @see {@link CreateFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link ConnectorServerException} (client fault)
 *  <p> An error occurred when retrieving data from the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class CreateFlowCommand extends $Command<
  CreateFlowCommandInput,
  CreateFlowCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: CreateFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFlowCommandInput, CreateFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "CreateFlowCommand";
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
  private serialize(input: CreateFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowCommandOutput> {
    return de_CreateFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
