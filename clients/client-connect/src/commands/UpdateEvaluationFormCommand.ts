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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateEvaluationFormRequest, UpdateEvaluationFormResponse } from "../models/models_1";
import { de_UpdateEvaluationFormCommand, se_UpdateEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateEvaluationFormCommand}.
 */
export interface UpdateEvaluationFormCommandInput extends UpdateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEvaluationFormCommand}.
 */
export interface UpdateEvaluationFormCommandOutput extends UpdateEvaluationFormResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates details about a specific evaluation form version in the specified Amazon Connect
 *    instance. An evaluation form must have a unique title within an instance. Question and section
 *    identifiers cannot be duplicated within the same evaluation form.</p>
 *          <p>This operation does not support partial updates. Instead it does a full update of evaluation form content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 *   CreateNewVersion: true || false,
 *   Title: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Items: [ // EvaluationFormItemsList // required
 *     { // EvaluationFormItem Union: only one key present
 *       Section: { // EvaluationFormSection
 *         Title: "STRING_VALUE", // required
 *         RefId: "STRING_VALUE", // required
 *         Instructions: "STRING_VALUE",
 *         Items: [
 *           {//  Union: only one key present
 *             Section: {
 *               Title: "STRING_VALUE", // required
 *               RefId: "STRING_VALUE", // required
 *               Instructions: "STRING_VALUE",
 *               Items: "<EvaluationFormItemsList>",
 *               Weight: Number("double"),
 *             },
 *             Question: { // EvaluationFormQuestion
 *               Title: "STRING_VALUE", // required
 *               Instructions: "STRING_VALUE",
 *               RefId: "STRING_VALUE", // required
 *               NotApplicableEnabled: true || false,
 *               QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 *               QuestionTypeProperties: { // EvaluationFormQuestionTypeProperties Union: only one key present
 *                 Numeric: { // EvaluationFormNumericQuestionProperties
 *                   MinValue: Number("int"), // required
 *                   MaxValue: Number("int"), // required
 *                   Options: [ // EvaluationFormNumericQuestionOptionList
 *                     { // EvaluationFormNumericQuestionOption
 *                       MinValue: Number("int"), // required
 *                       MaxValue: Number("int"), // required
 *                       Score: Number("int"),
 *                       AutomaticFail: true || false,
 *                     },
 *                   ],
 *                   Automation: { // EvaluationFormNumericQuestionAutomation Union: only one key present
 *                     PropertyValue: { // NumericQuestionPropertyValueAutomation
 *                       Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
 *                     },
 *                   },
 *                 },
 *                 SingleSelect: { // EvaluationFormSingleSelectQuestionProperties
 *                   Options: [ // EvaluationFormSingleSelectQuestionOptionList // required
 *                     { // EvaluationFormSingleSelectQuestionOption
 *                       RefId: "STRING_VALUE", // required
 *                       Text: "STRING_VALUE", // required
 *                       Score: Number("int"),
 *                       AutomaticFail: true || false,
 *                     },
 *                   ],
 *                   DisplayAs: "DROPDOWN" || "RADIO",
 *                   Automation: { // EvaluationFormSingleSelectQuestionAutomation
 *                     Options: [ // EvaluationFormSingleSelectQuestionAutomationOptionList // required
 *                       { // EvaluationFormSingleSelectQuestionAutomationOption Union: only one key present
 *                         RuleCategory: { // SingleSelectQuestionRuleCategoryAutomation
 *                           Category: "STRING_VALUE", // required
 *                           Condition: "PRESENT" || "NOT_PRESENT", // required
 *                           OptionRefId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     DefaultOptionRefId: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *               Weight: Number("double"),
 *             },
 *           },
 *         ],
 *         Weight: Number("double"),
 *       },
 *       Question: {
 *         Title: "STRING_VALUE", // required
 *         Instructions: "STRING_VALUE",
 *         RefId: "STRING_VALUE", // required
 *         NotApplicableEnabled: true || false,
 *         QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 *         QuestionTypeProperties: {//  Union: only one key present
 *           Numeric: {
 *             MinValue: Number("int"), // required
 *             MaxValue: Number("int"), // required
 *             Options: [
 *               {
 *                 MinValue: Number("int"), // required
 *                 MaxValue: Number("int"), // required
 *                 Score: Number("int"),
 *                 AutomaticFail: true || false,
 *               },
 *             ],
 *             Automation: {//  Union: only one key present
 *               PropertyValue: {
 *                 Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
 *               },
 *             },
 *           },
 *           SingleSelect: {
 *             Options: [ // required
 *               {
 *                 RefId: "STRING_VALUE", // required
 *                 Text: "STRING_VALUE", // required
 *                 Score: Number("int"),
 *                 AutomaticFail: true || false,
 *               },
 *             ],
 *             DisplayAs: "DROPDOWN" || "RADIO",
 *             Automation: {
 *               Options: [ // required
 *                 {//  Union: only one key present
 *                   RuleCategory: {
 *                     Category: "STRING_VALUE", // required
 *                     Condition: "PRESENT" || "NOT_PRESENT", // required
 *                     OptionRefId: "STRING_VALUE", // required
 *                   },
 *                 },
 *               ],
 *               DefaultOptionRefId: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         Weight: Number("double"),
 *       },
 *     },
 *   ],
 *   ScoringStrategy: { // EvaluationFormScoringStrategy
 *     Mode: "QUESTION_ONLY" || "SECTION_ONLY", // required
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateEvaluationFormCommandInput - {@link UpdateEvaluationFormCommandInput}
 * @returns {@link UpdateEvaluationFormCommandOutput}
 * @see {@link UpdateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateEvaluationFormCommand extends $Command<
  UpdateEvaluationFormCommandInput,
  UpdateEvaluationFormCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateEvaluationFormCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEvaluationFormCommandInput, UpdateEvaluationFormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEvaluationFormCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateEvaluationFormCommand";
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
  private serialize(input: UpdateEvaluationFormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEvaluationFormCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEvaluationFormCommandOutput> {
    return de_UpdateEvaluationFormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
