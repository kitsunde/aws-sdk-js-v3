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
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_1";
import { de_DescribeInputCommand, se_DescribeInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandInput extends DescribeInputRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {}

/**
 * @public
 * Produces details about an input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputRequest
 *   InputId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputResponse
 * //   Arn: "STRING_VALUE",
 * //   AttachedChannels: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Destinations: [ // __listOfInputDestination
 * //     { // InputDestination
 * //       Ip: "STRING_VALUE",
 * //       Port: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       Vpc: { // InputDestinationVpc
 * //         AvailabilityZone: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //   InputDevices: [ // __listOfInputDeviceSettings
 * //     { // InputDeviceSettings
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InputPartnerIds: [
 * //     "STRING_VALUE",
 * //   ],
 * //   InputSourceType: "STATIC" || "DYNAMIC",
 * //   MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //     { // MediaConnectFlow
 * //       FlowArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   SecurityGroups: [
 * //     "STRING_VALUE",
 * //   ],
 * //   Sources: [ // __listOfInputSource
 * //     { // InputSource
 * //       PasswordParam: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //     },
 * //   ],
 * //   State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE",
 * // };
 *
 * ```
 *
 * @param DescribeInputCommandInput - {@link DescribeInputCommandInput}
 * @returns {@link DescribeInputCommandOutput}
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
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
export class DescribeInputCommand extends $Command<
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
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
  constructor(readonly input: DescribeInputCommandInput) {
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
  ): Handler<DescribeInputCommandInput, DescribeInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeInputCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeInputCommand";
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
  private serialize(input: DescribeInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInputCommandOutput> {
    return de_DescribeInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
