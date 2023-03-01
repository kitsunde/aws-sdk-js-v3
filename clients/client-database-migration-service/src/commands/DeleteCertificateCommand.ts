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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DeleteCertificateMessage,
  DeleteCertificateMessageFilterSensitiveLog,
  DeleteCertificateResponse,
  DeleteCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCertificateCommand,
  serializeAws_json1_1DeleteCertificateCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandInput extends DeleteCertificateMessage {}
/**
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends DeleteCertificateResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 *
 * @example Delete Certificate
 * ```javascript
 * // Deletes the specified certificate.
 * const input = {
 *   "CertificateArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUSM457DE6XFJCJQ"
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificate": {}
 * }
 * *\/
 * ```
 *
 */
export class DeleteCertificateCommand extends $Command<
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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

  constructor(readonly input: DeleteCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCertificateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCertificateCommandOutput> {
    return deserializeAws_json1_1DeleteCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
