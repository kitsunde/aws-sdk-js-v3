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

import { GetSegmentImportJobsRequest, GetSegmentImportJobsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetSegmentImportJobsCommand, se_GetSegmentImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetSegmentImportJobsCommand}.
 */
export interface GetSegmentImportJobsCommandInput extends GetSegmentImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentImportJobsCommand}.
 */
export interface GetSegmentImportJobsCommandOutput extends GetSegmentImportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the status and settings of the import jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetSegmentImportJobsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   SegmentId: "STRING_VALUE", // required
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetSegmentImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentImportJobsResponse
 * //   ImportJobsResponse: { // ImportJobsResponse
 * //     Item: [ // ListOfImportJobResponse // required
 * //       { // ImportJobResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         CompletedPieces: Number("int"),
 * //         CompletionDate: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE", // required
 * //         Definition: { // ImportJobResource
 * //           DefineSegment: true || false,
 * //           ExternalId: "STRING_VALUE",
 * //           Format: "CSV" || "JSON", // required
 * //           RegisterEndpoints: true || false,
 * //           RoleArn: "STRING_VALUE", // required
 * //           S3Url: "STRING_VALUE", // required
 * //           SegmentId: "STRING_VALUE",
 * //           SegmentName: "STRING_VALUE",
 * //         },
 * //         FailedPieces: Number("int"),
 * //         Failures: [ // ListOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         Id: "STRING_VALUE", // required
 * //         JobStatus: "CREATED" || "PREPARING_FOR_INITIALIZATION" || "INITIALIZING" || "PROCESSING" || "PENDING_JOB" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED", // required
 * //         TotalFailures: Number("int"),
 * //         TotalPieces: Number("int"),
 * //         TotalProcessed: Number("int"),
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSegmentImportJobsCommandInput - {@link GetSegmentImportJobsCommandInput}
 * @returns {@link GetSegmentImportJobsCommandOutput}
 * @see {@link GetSegmentImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class GetSegmentImportJobsCommand extends $Command<
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetSegmentImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSegmentImportJobsCommandInput, GetSegmentImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSegmentImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetSegmentImportJobsCommand";
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
  private serialize(input: GetSegmentImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSegmentImportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSegmentImportJobsCommandOutput> {
    return de_GetSegmentImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
