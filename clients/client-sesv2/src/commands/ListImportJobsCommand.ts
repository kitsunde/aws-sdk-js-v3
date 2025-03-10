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

import { ListImportJobsRequest, ListImportJobsResponse } from "../models/models_0";
import { de_ListImportJobsCommand, se_ListImportJobsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 *
 * The input for {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandInput extends ListImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandOutput extends ListImportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListImportJobsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListImportJobsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListImportJobsRequest
 *   ImportDestinationType: "SUPPRESSION_LIST" || "CONTACT_LIST",
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportJobsResponse
 * //   ImportJobs: [ // ImportJobSummaryList
 * //     { // ImportJobSummary
 * //       JobId: "STRING_VALUE",
 * //       ImportDestination: { // ImportDestination
 * //         SuppressionListDestination: { // SuppressionListDestination
 * //           SuppressionListImportAction: "DELETE" || "PUT", // required
 * //         },
 * //         ContactListDestination: { // ContactListDestination
 * //           ContactListName: "STRING_VALUE", // required
 * //           ContactListImportAction: "DELETE" || "PUT", // required
 * //         },
 * //       },
 * //       JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ProcessedRecordsCount: Number("int"),
 * //       FailedRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportJobsCommandInput - {@link ListImportJobsCommandInput}
 * @returns {@link ListImportJobsCommandOutput}
 * @see {@link ListImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListImportJobsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class ListImportJobsCommand extends $Command<
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: ListImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImportJobsCommandInput, ListImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListImportJobsCommand";
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
  private serialize(input: ListImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportJobsCommandOutput> {
    return de_ListImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
