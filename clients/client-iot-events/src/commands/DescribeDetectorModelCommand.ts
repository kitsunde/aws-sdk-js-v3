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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelRequest, DescribeDetectorModelResponse } from "../models/models_0";
import { de_DescribeDetectorModelCommand, se_DescribeDetectorModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeDetectorModelCommand}.
 */
export interface DescribeDetectorModelCommandInput extends DescribeDetectorModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectorModelCommand}.
 */
export interface DescribeDetectorModelCommandOutput extends DescribeDetectorModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
 *       information about the latest version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // DescribeDetectorModelRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   detectorModelVersion: "STRING_VALUE",
 * };
 * const command = new DescribeDetectorModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectorModelResponse
 * //   detectorModel: { // DetectorModel
 * //     detectorModelDefinition: { // DetectorModelDefinition
 * //       states: [ // States // required
 * //         { // State
 * //           stateName: "STRING_VALUE", // required
 * //           onInput: { // OnInputLifecycle
 * //             events: [ // Events
 * //               { // Event
 * //                 eventName: "STRING_VALUE", // required
 * //                 condition: "STRING_VALUE",
 * //                 actions: [ // Actions
 * //                   { // Action
 * //                     setVariable: { // SetVariableAction
 * //                       variableName: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                     sns: { // SNSTopicPublishAction
 * //                       targetArn: "STRING_VALUE", // required
 * //                       payload: { // Payload
 * //                         contentExpression: "STRING_VALUE", // required
 * //                         type: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                     iotTopicPublish: { // IotTopicPublishAction
 * //                       mqttTopic: "STRING_VALUE", // required
 * //                       payload: {
 * //                         contentExpression: "STRING_VALUE", // required
 * //                         type: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                     setTimer: { // SetTimerAction
 * //                       timerName: "STRING_VALUE", // required
 * //                       seconds: Number("int"),
 * //                       durationExpression: "STRING_VALUE",
 * //                     },
 * //                     clearTimer: { // ClearTimerAction
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     resetTimer: { // ResetTimerAction
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     lambda: { // LambdaAction
 * //                       functionArn: "STRING_VALUE", // required
 * //                       payload: {
 * //                         contentExpression: "STRING_VALUE", // required
 * //                         type: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                     iotEvents: { // IotEventsAction
 * //                       inputName: "STRING_VALUE", // required
 * //                       payload: {
 * //                         contentExpression: "STRING_VALUE", // required
 * //                         type: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                     sqs: { // SqsAction
 * //                       queueUrl: "STRING_VALUE", // required
 * //                       useBase64: true || false,
 * //                       payload: {
 * //                         contentExpression: "STRING_VALUE", // required
 * //                         type: "STRING_VALUE", // required
 * //                       },
 * //                     },
 * //                     firehose: { // FirehoseAction
 * //                       deliveryStreamName: "STRING_VALUE", // required
 * //                       separator: "STRING_VALUE",
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDB: { // DynamoDBAction
 * //                       hashKeyType: "STRING_VALUE",
 * //                       hashKeyField: "STRING_VALUE", // required
 * //                       hashKeyValue: "STRING_VALUE", // required
 * //                       rangeKeyType: "STRING_VALUE",
 * //                       rangeKeyField: "STRING_VALUE",
 * //                       rangeKeyValue: "STRING_VALUE",
 * //                       operation: "STRING_VALUE",
 * //                       payloadField: "STRING_VALUE",
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDBv2: { // DynamoDBv2Action
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotSiteWise: { // IotSiteWiseAction
 * //                       entryId: "STRING_VALUE",
 * //                       assetId: "STRING_VALUE",
 * //                       propertyId: "STRING_VALUE",
 * //                       propertyAlias: "STRING_VALUE",
 * //                       propertyValue: { // AssetPropertyValue
 * //                         value: { // AssetPropertyVariant
 * //                           stringValue: "STRING_VALUE",
 * //                           integerValue: "STRING_VALUE",
 * //                           doubleValue: "STRING_VALUE",
 * //                           booleanValue: "STRING_VALUE",
 * //                         },
 * //                         timestamp: { // AssetPropertyTimestamp
 * //                           timeInSeconds: "STRING_VALUE", // required
 * //                           offsetInNanos: "STRING_VALUE",
 * //                         },
 * //                         quality: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             transitionEvents: [ // TransitionEvents
 * //               { // TransitionEvent
 * //                 eventName: "STRING_VALUE", // required
 * //                 condition: "STRING_VALUE", // required
 * //                 actions: [
 * //                   {
 * //                     setVariable: {
 * //                       variableName: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                     sns: {
 * //                       targetArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotTopicPublish: {
 * //                       mqttTopic: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     setTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                       seconds: Number("int"),
 * //                       durationExpression: "STRING_VALUE",
 * //                     },
 * //                     clearTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     resetTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     lambda: {
 * //                       functionArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotEvents: {
 * //                       inputName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     sqs: {
 * //                       queueUrl: "STRING_VALUE", // required
 * //                       useBase64: true || false,
 * //                       payload: "<Payload>",
 * //                     },
 * //                     firehose: {
 * //                       deliveryStreamName: "STRING_VALUE", // required
 * //                       separator: "STRING_VALUE",
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDB: {
 * //                       hashKeyType: "STRING_VALUE",
 * //                       hashKeyField: "STRING_VALUE", // required
 * //                       hashKeyValue: "STRING_VALUE", // required
 * //                       rangeKeyType: "STRING_VALUE",
 * //                       rangeKeyField: "STRING_VALUE",
 * //                       rangeKeyValue: "STRING_VALUE",
 * //                       operation: "STRING_VALUE",
 * //                       payloadField: "STRING_VALUE",
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDBv2: {
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotSiteWise: {
 * //                       entryId: "STRING_VALUE",
 * //                       assetId: "STRING_VALUE",
 * //                       propertyId: "STRING_VALUE",
 * //                       propertyAlias: "STRING_VALUE",
 * //                       propertyValue: {
 * //                         value: {
 * //                           stringValue: "STRING_VALUE",
 * //                           integerValue: "STRING_VALUE",
 * //                           doubleValue: "STRING_VALUE",
 * //                           booleanValue: "STRING_VALUE",
 * //                         },
 * //                         timestamp: {
 * //                           timeInSeconds: "STRING_VALUE", // required
 * //                           offsetInNanos: "STRING_VALUE",
 * //                         },
 * //                         quality: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //                 nextState: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           onEnter: { // OnEnterLifecycle
 * //             events: [
 * //               {
 * //                 eventName: "STRING_VALUE", // required
 * //                 condition: "STRING_VALUE",
 * //                 actions: [
 * //                   {
 * //                     setVariable: {
 * //                       variableName: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                     sns: {
 * //                       targetArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotTopicPublish: {
 * //                       mqttTopic: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     setTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                       seconds: Number("int"),
 * //                       durationExpression: "STRING_VALUE",
 * //                     },
 * //                     clearTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     resetTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     lambda: {
 * //                       functionArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotEvents: {
 * //                       inputName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     sqs: {
 * //                       queueUrl: "STRING_VALUE", // required
 * //                       useBase64: true || false,
 * //                       payload: "<Payload>",
 * //                     },
 * //                     firehose: {
 * //                       deliveryStreamName: "STRING_VALUE", // required
 * //                       separator: "STRING_VALUE",
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDB: {
 * //                       hashKeyType: "STRING_VALUE",
 * //                       hashKeyField: "STRING_VALUE", // required
 * //                       hashKeyValue: "STRING_VALUE", // required
 * //                       rangeKeyType: "STRING_VALUE",
 * //                       rangeKeyField: "STRING_VALUE",
 * //                       rangeKeyValue: "STRING_VALUE",
 * //                       operation: "STRING_VALUE",
 * //                       payloadField: "STRING_VALUE",
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDBv2: {
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotSiteWise: {
 * //                       entryId: "STRING_VALUE",
 * //                       assetId: "STRING_VALUE",
 * //                       propertyId: "STRING_VALUE",
 * //                       propertyAlias: "STRING_VALUE",
 * //                       propertyValue: {
 * //                         value: {
 * //                           stringValue: "STRING_VALUE",
 * //                           integerValue: "STRING_VALUE",
 * //                           doubleValue: "STRING_VALUE",
 * //                           booleanValue: "STRING_VALUE",
 * //                         },
 * //                         timestamp: {
 * //                           timeInSeconds: "STRING_VALUE", // required
 * //                           offsetInNanos: "STRING_VALUE",
 * //                         },
 * //                         quality: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           onExit: { // OnExitLifecycle
 * //             events: [
 * //               {
 * //                 eventName: "STRING_VALUE", // required
 * //                 condition: "STRING_VALUE",
 * //                 actions: [
 * //                   {
 * //                     setVariable: {
 * //                       variableName: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                     sns: {
 * //                       targetArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotTopicPublish: {
 * //                       mqttTopic: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     setTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                       seconds: Number("int"),
 * //                       durationExpression: "STRING_VALUE",
 * //                     },
 * //                     clearTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     resetTimer: {
 * //                       timerName: "STRING_VALUE", // required
 * //                     },
 * //                     lambda: {
 * //                       functionArn: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotEvents: {
 * //                       inputName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     sqs: {
 * //                       queueUrl: "STRING_VALUE", // required
 * //                       useBase64: true || false,
 * //                       payload: "<Payload>",
 * //                     },
 * //                     firehose: {
 * //                       deliveryStreamName: "STRING_VALUE", // required
 * //                       separator: "STRING_VALUE",
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDB: {
 * //                       hashKeyType: "STRING_VALUE",
 * //                       hashKeyField: "STRING_VALUE", // required
 * //                       hashKeyValue: "STRING_VALUE", // required
 * //                       rangeKeyType: "STRING_VALUE",
 * //                       rangeKeyField: "STRING_VALUE",
 * //                       rangeKeyValue: "STRING_VALUE",
 * //                       operation: "STRING_VALUE",
 * //                       payloadField: "STRING_VALUE",
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     dynamoDBv2: {
 * //                       tableName: "STRING_VALUE", // required
 * //                       payload: "<Payload>",
 * //                     },
 * //                     iotSiteWise: {
 * //                       entryId: "STRING_VALUE",
 * //                       assetId: "STRING_VALUE",
 * //                       propertyId: "STRING_VALUE",
 * //                       propertyAlias: "STRING_VALUE",
 * //                       propertyValue: {
 * //                         value: {
 * //                           stringValue: "STRING_VALUE",
 * //                           integerValue: "STRING_VALUE",
 * //                           doubleValue: "STRING_VALUE",
 * //                           booleanValue: "STRING_VALUE",
 * //                         },
 * //                         timestamp: {
 * //                           timeInSeconds: "STRING_VALUE", // required
 * //                           offsetInNanos: "STRING_VALUE",
 * //                         },
 * //                         quality: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       initialStateName: "STRING_VALUE", // required
 * //     },
 * //     detectorModelConfiguration: { // DetectorModelConfiguration
 * //       detectorModelName: "STRING_VALUE",
 * //       detectorModelVersion: "STRING_VALUE",
 * //       detectorModelDescription: "STRING_VALUE",
 * //       detectorModelArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       evaluationMethod: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDetectorModelCommandInput - {@link DescribeDetectorModelCommandInput}
 * @returns {@link DescribeDetectorModelCommandOutput}
 * @see {@link DescribeDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 */
export class DescribeDetectorModelCommand extends $Command<
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput,
  IoTEventsClientResolvedConfig
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
  constructor(readonly input: DescribeDetectorModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDetectorModelCommandInput, DescribeDetectorModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDetectorModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeDetectorModelCommand";
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
  private serialize(input: DescribeDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDetectorModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDetectorModelCommandOutput> {
    return de_DescribeDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
