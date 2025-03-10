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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DisassociateKmsKeyRequest } from "../models/models_0";
import { de_DisassociateKmsKeyCommand, se_DisassociateKmsKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandInput extends DisassociateKmsKeyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the associated KMS key from the specified log
 *       group.</p>
 *          <p>After the KMS key is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data
 *       remains encrypted, and CloudWatch Logs requires permissions for the KMS key
 *       whenever the encrypted data is requested.</p>
 *          <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DisassociateKmsKeyRequest
 *   logGroupName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateKmsKeyCommandInput - {@link DisassociateKmsKeyCommandInput}
 * @returns {@link DisassociateKmsKeyCommandOutput}
 * @see {@link DisassociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DisassociateKmsKeyCommand extends $Command<
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: DisassociateKmsKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateKmsKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DisassociateKmsKeyCommand";
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
  private serialize(input: DisassociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateKmsKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateKmsKeyCommandOutput> {
    return de_DisassociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
