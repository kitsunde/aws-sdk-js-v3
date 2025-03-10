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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexesRequest, ListMultiplexesResponse } from "../models/models_1";
import { de_ListMultiplexesCommand, se_ListMultiplexesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListMultiplexesCommand}.
 */
export interface ListMultiplexesCommandInput extends ListMultiplexesRequest {}
/**
 * @public
 *
 * The output of {@link ListMultiplexesCommand}.
 */
export interface ListMultiplexesCommandOutput extends ListMultiplexesResponse, __MetadataBearer {}

/**
 * @public
 * Retrieve a list of the existing multiplexes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListMultiplexesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMultiplexesCommand(input);
 * const response = await client.send(command);
 * // { // ListMultiplexesResponse
 * //   Multiplexes: [ // __listOfMultiplexSummary
 * //     { // MultiplexSummary
 * //       Arn: "STRING_VALUE",
 * //       AvailabilityZones: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Id: "STRING_VALUE",
 * //       MultiplexSettings: { // MultiplexSettingsSummary
 * //         TransportStreamBitrate: Number("int"),
 * //       },
 * //       Name: "STRING_VALUE",
 * //       PipelinesRunningCount: Number("int"),
 * //       ProgramCount: Number("int"),
 * //       State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultiplexesCommandInput - {@link ListMultiplexesCommandInput}
 * @returns {@link ListMultiplexesCommandOutput}
 * @see {@link ListMultiplexesCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class ListMultiplexesCommand extends $Command<
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: ListMultiplexesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultiplexesCommandInput, ListMultiplexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMultiplexesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListMultiplexesCommand";
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
  private serialize(input: ListMultiplexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMultiplexesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultiplexesCommandOutput> {
    return de_ListMultiplexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
