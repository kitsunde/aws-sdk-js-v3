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
import { DescribeExportRequest, DescribeExportResponse } from "../models/models_0";
import { de_DescribeExportCommand, se_DescribeExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeExportCommand}.
 */
export interface DescribeExportCommandInput extends DescribeExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExportCommand}.
 */
export interface DescribeExportCommandOutput extends DescribeExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specific export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeExportRequest
 *   exportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportResponse
 * //   exportId: "STRING_VALUE",
 * //   resourceSpecification: { // ExportResourceSpecification
 * //     botExportSpecification: { // BotExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //     },
 * //     botLocaleExportSpecification: { // BotLocaleExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   fileFormat: "LexJson" || "TSV",
 * //   exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   downloadUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeExportCommandInput - {@link DescribeExportCommandInput}
 * @returns {@link DescribeExportCommandOutput}
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
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
export class DescribeExportCommand extends $Command<
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
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
  constructor(readonly input: DescribeExportCommandInput) {
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
  ): Handler<DescribeExportCommandInput, DescribeExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeExportCommand";
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
  private serialize(input: DescribeExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExportCommandOutput> {
    return de_DescribeExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
