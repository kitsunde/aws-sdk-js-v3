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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerStorageRequest, UpdateBrokerStorageResponse } from "../models/models_0";
import { de_UpdateBrokerStorageCommand, se_UpdateBrokerStorageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateBrokerStorageCommand}.
 */
export interface UpdateBrokerStorageCommandInput extends UpdateBrokerStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerStorageCommand}.
 */
export interface UpdateBrokerStorageCommandOutput extends UpdateBrokerStorageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the EBS storage associated with MSK brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerStorageCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerStorageCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateBrokerStorageRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetBrokerEBSVolumeInfo: [ // __listOfBrokerEBSVolumeInfo // required
 *     { // BrokerEBSVolumeInfo
 *       KafkaBrokerNodeId: "STRING_VALUE", // required
 *       ProvisionedThroughput: { // ProvisionedThroughput
 *         Enabled: true || false,
 *         VolumeThroughput: Number("int"),
 *       },
 *       VolumeSizeGB: Number("int"),
 *     },
 *   ],
 * };
 * const command = new UpdateBrokerStorageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerStorageResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerStorageCommandInput - {@link UpdateBrokerStorageCommandInput}
 * @returns {@link UpdateBrokerStorageCommandOutput}
 * @see {@link UpdateBrokerStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerStorageCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class UpdateBrokerStorageCommand extends $Command<
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: UpdateBrokerStorageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBrokerStorageCommandInput, UpdateBrokerStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBrokerStorageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateBrokerStorageCommand";
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
  private serialize(input: UpdateBrokerStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBrokerStorageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerStorageCommandOutput> {
    return de_UpdateBrokerStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
