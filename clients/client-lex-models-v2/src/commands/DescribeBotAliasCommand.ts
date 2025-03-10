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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotAliasRequest, DescribeBotAliasResponse } from "../models/models_0";
import { de_DescribeBotAliasCommand, se_DescribeBotAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeBotAliasCommand}.
 */
export interface DescribeBotAliasCommandInput extends DescribeBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotAliasCommand}.
 */
export interface DescribeBotAliasCommandOutput extends DescribeBotAliasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a specific bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotAliasRequest
 *   botAliasId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotAliasResponse
 * //   botAliasId: "STRING_VALUE",
 * //   botAliasName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botAliasLocaleSettings: { // BotAliasLocaleSettingsMap
 * //     "<keys>": { // BotAliasLocaleSettings
 * //       enabled: true || false, // required
 * //       codeHookSpecification: { // CodeHookSpecification
 * //         lambdaCodeHook: { // LambdaCodeHook
 * //           lambdaARN: "STRING_VALUE", // required
 * //           codeHookInterfaceVersion: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   conversationLogSettings: { // ConversationLogSettings
 * //     textLogSettings: [ // TextLogSettingsList
 * //       { // TextLogSetting
 * //         enabled: true || false, // required
 * //         destination: { // TextLogDestination
 * //           cloudWatch: { // CloudWatchLogGroupLogDestination
 * //             cloudWatchLogGroupArn: "STRING_VALUE", // required
 * //             logPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     audioLogSettings: [ // AudioLogSettingsList
 * //       { // AudioLogSetting
 * //         enabled: true || false, // required
 * //         destination: { // AudioLogDestination
 * //           s3Bucket: { // S3BucketLogDestination
 * //             kmsKeyArn: "STRING_VALUE",
 * //             s3BucketArn: "STRING_VALUE", // required
 * //             logPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   sentimentAnalysisSettings: { // SentimentAnalysisSettings
 * //     detectSentiment: true || false, // required
 * //   },
 * //   botAliasHistoryEvents: [ // BotAliasHistoryEventsList
 * //     { // BotAliasHistoryEvent
 * //       botVersion: "STRING_VALUE",
 * //       startDate: new Date("TIMESTAMP"),
 * //       endDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   botAliasStatus: "Creating" || "Available" || "Deleting" || "Failed",
 * //   botId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   parentBotNetworks: [ // ParentBotNetworks
 * //     { // ParentBotNetwork
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBotAliasCommandInput - {@link DescribeBotAliasCommandInput}
 * @returns {@link DescribeBotAliasCommandOutput}
 * @see {@link DescribeBotAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class DescribeBotAliasCommand extends $Command<
  DescribeBotAliasCommandInput,
  DescribeBotAliasCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: DescribeBotAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBotAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeBotAliasCommand";
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
  private serialize(input: DescribeBotAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBotAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBotAliasCommandOutput> {
    return de_DescribeBotAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
