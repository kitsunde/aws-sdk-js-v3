import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDeploymentConfigCommand,
  serializeAws_json1_1CreateDeploymentConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateDeploymentConfigCommandInput extends CreateDeploymentConfigInput {}
export interface CreateDeploymentConfigCommandOutput extends CreateDeploymentConfigOutput, __MetadataBearer {}

/**
 * <p> Creates a deployment configuration. </p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new CreateDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDeploymentConfigCommand extends $Command<
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeploymentConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "CreateDeploymentConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeploymentConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeploymentConfigOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDeploymentConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentConfigCommandOutput> {
    return deserializeAws_json1_1CreateDeploymentConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
