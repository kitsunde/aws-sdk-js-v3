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
import { DeleteMultiplexRequest, DeleteMultiplexResponse } from "../models/models_1";
import { de_DeleteMultiplexCommand, se_DeleteMultiplexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteMultiplexCommand}.
 */
export interface DeleteMultiplexCommandInput extends DeleteMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiplexCommand}.
 */
export interface DeleteMultiplexCommandOutput extends DeleteMultiplexResponse, __MetadataBearer {}

/**
 * @public
 * Delete a multiplex. The multiplex must be idle.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiplexResponse
 * //   Arn: "STRING_VALUE",
 * //   AvailabilityZones: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Destinations: [ // __listOfMultiplexOutputDestination
 * //     { // MultiplexOutputDestination
 * //       MediaConnectSettings: { // MultiplexMediaConnectOutputDestinationSettings
 * //         EntitlementArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   MultiplexSettings: { // MultiplexSettings
 * //     MaximumVideoBufferDelayMilliseconds: Number("int"),
 * //     TransportStreamBitrate: Number("int"), // required
 * //     TransportStreamId: Number("int"), // required
 * //     TransportStreamReservedBitrate: Number("int"),
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PipelinesRunningCount: Number("int"),
 * //   ProgramCount: Number("int"),
 * //   State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteMultiplexCommandInput - {@link DeleteMultiplexCommandInput}
 * @returns {@link DeleteMultiplexCommandOutput}
 * @see {@link DeleteMultiplexCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class DeleteMultiplexCommand extends $Command<
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput,
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
  constructor(readonly input: DeleteMultiplexCommandInput) {
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
  ): Handler<DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMultiplexCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteMultiplexCommand";
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
  private serialize(input: DeleteMultiplexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMultiplexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMultiplexCommandOutput> {
    return de_DeleteMultiplexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
