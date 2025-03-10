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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeStorageSystemRequest, DescribeStorageSystemResponse } from "../models/models_0";
import { de_DescribeStorageSystemCommand, se_DescribeStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeStorageSystemCommand}.
 */
export interface DescribeStorageSystemCommandInput extends DescribeStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemCommand}.
 */
export interface DescribeStorageSystemCommandOutput extends DescribeStorageSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an on-premises storage system that you're using with
 *       DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStorageSystemCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResponse
 * //   StorageSystemArn: "STRING_VALUE",
 * //   ServerConfiguration: { // DiscoveryServerConfiguration
 * //     ServerHostname: "STRING_VALUE", // required
 * //     ServerPort: Number("int"),
 * //   },
 * //   SystemType: "NetAppONTAP",
 * //   AgentArns: [ // DiscoveryAgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * //   ConnectivityStatus: "PASS" || "FAIL" || "UNKNOWN",
 * //   CloudWatchLogGroupArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   SecretsManagerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemCommandInput - {@link DescribeStorageSystemCommandInput}
 * @returns {@link DescribeStorageSystemCommandOutput}
 * @see {@link DescribeStorageSystemCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class DescribeStorageSystemCommand extends $Command<
  DescribeStorageSystemCommandInput,
  DescribeStorageSystemCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: DescribeStorageSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStorageSystemCommandInput, DescribeStorageSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStorageSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeStorageSystemCommand";
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
  private serialize(input: DescribeStorageSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStorageSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStorageSystemCommandOutput> {
    return de_DescribeStorageSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
