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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  CreateHostedConfigurationVersionRequest,
  CreateHostedConfigurationVersionRequestFilterSensitiveLog,
  HostedConfigurationVersion,
  HostedConfigurationVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateHostedConfigurationVersionCommand,
  serializeAws_restJson1CreateHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateHostedConfigurationVersionCommand}.
 */
export interface CreateHostedConfigurationVersionCommandInput extends CreateHostedConfigurationVersionRequest {}
/**
 * The output of {@link CreateHostedConfigurationVersionCommand}.
 */
export interface CreateHostedConfigurationVersionCommandOutput extends HostedConfigurationVersion, __MetadataBearer {}

/**
 * <p>Creates a new configuration in the AppConfig hosted configuration
 *          store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 *
 * @example To create a hosted configuration version
 * ```javascript
 * // The following create-hosted-configuration-version example creates a new configuration in the AWS AppConfig configuration store.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "Content": "eyAiTmFtZSI6ICJFeGFtcGxlQXBwbGljYXRpb24iLCAiSWQiOiBFeGFtcGxlSUQsICJSYW5rIjogNyB9",
 *   "ContentType": "text",
 *   "LatestVersionNumber": 1
 * };
 * const command = new CreateHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ContentType": "text",
 *   "VersionNumber": 1
 * }
 * *\/
 * ```
 *
 */
export class CreateHostedConfigurationVersionCommand extends $Command<
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
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

  constructor(readonly input: CreateHostedConfigurationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostedConfigurationVersionCommandInput, CreateHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHostedConfigurationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHostedConfigurationVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateHostedConfigurationVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateHostedConfigurationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateHostedConfigurationVersionCommandOutput> {
    return deserializeAws_restJson1CreateHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
