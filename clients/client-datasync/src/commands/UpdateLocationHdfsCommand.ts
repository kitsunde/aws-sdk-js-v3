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
import { UpdateLocationHdfsRequest, UpdateLocationHdfsResponse } from "../models/models_0";
import { de_UpdateLocationHdfsCommand, se_UpdateLocationHdfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateLocationHdfsCommand}.
 */
export interface UpdateLocationHdfsCommandInput extends UpdateLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationHdfsCommand}.
 */
export interface UpdateLocationHdfsCommandOutput extends UpdateLocationHdfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates some parameters of a previously created location for a Hadoop Distributed File
 *       System cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationHdfsRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   NameNodes: [ // HdfsNameNodeList
 *     { // HdfsNameNode
 *       Hostname: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *   ],
 *   BlockSize: Number("int"),
 *   ReplicationFactor: Number("int"),
 *   KmsKeyProviderUri: "STRING_VALUE",
 *   QopConfiguration: { // QopConfiguration
 *     RpcProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *     DataTransferProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *   },
 *   AuthenticationType: "SIMPLE" || "KERBEROS",
 *   SimpleUser: "STRING_VALUE",
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: "BLOB_VALUE",
 *   KerberosKrb5Conf: "BLOB_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLocationHdfsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationHdfsCommandInput - {@link UpdateLocationHdfsCommandInput}
 * @returns {@link UpdateLocationHdfsCommandOutput}
 * @see {@link UpdateLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationHdfsCommandOutput} for command's `response` shape.
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
export class UpdateLocationHdfsCommand extends $Command<
  UpdateLocationHdfsCommandInput,
  UpdateLocationHdfsCommandOutput,
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
  constructor(readonly input: UpdateLocationHdfsCommandInput) {
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
  ): Handler<UpdateLocationHdfsCommandInput, UpdateLocationHdfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLocationHdfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateLocationHdfsCommand";
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
  private serialize(input: UpdateLocationHdfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLocationHdfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLocationHdfsCommandOutput> {
    return de_UpdateLocationHdfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
