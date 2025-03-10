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
import {
  AddStorageSystemRequest,
  AddStorageSystemRequestFilterSensitiveLog,
  AddStorageSystemResponse,
} from "../models/models_0";
import { de_AddStorageSystemCommand, se_AddStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AddStorageSystemCommand}.
 */
export interface AddStorageSystemCommandInput extends AddStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link AddStorageSystemCommand}.
 */
export interface AddStorageSystemCommandOutput extends AddStorageSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect
 *       information about.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, AddStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, AddStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // AddStorageSystemRequest
 *   ServerConfiguration: { // DiscoveryServerConfiguration
 *     ServerHostname: "STRING_VALUE", // required
 *     ServerPort: Number("int"),
 *   },
 *   SystemType: "NetAppONTAP", // required
 *   AgentArns: [ // DiscoveryAgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Credentials: { // Credentials
 *     Username: "STRING_VALUE", // required
 *     Password: "STRING_VALUE", // required
 *   },
 * };
 * const command = new AddStorageSystemCommand(input);
 * const response = await client.send(command);
 * // { // AddStorageSystemResponse
 * //   StorageSystemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AddStorageSystemCommandInput - {@link AddStorageSystemCommandInput}
 * @returns {@link AddStorageSystemCommandOutput}
 * @see {@link AddStorageSystemCommandInput} for command's `input` shape.
 * @see {@link AddStorageSystemCommandOutput} for command's `response` shape.
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
export class AddStorageSystemCommand extends $Command<
  AddStorageSystemCommandInput,
  AddStorageSystemCommandOutput,
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
  constructor(readonly input: AddStorageSystemCommandInput) {
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
  ): Handler<AddStorageSystemCommandInput, AddStorageSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddStorageSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "AddStorageSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddStorageSystemRequestFilterSensitiveLog,
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
  private serialize(input: AddStorageSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddStorageSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddStorageSystemCommandOutput> {
    return de_AddStorageSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
