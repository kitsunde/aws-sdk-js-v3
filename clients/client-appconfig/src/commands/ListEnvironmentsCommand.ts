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
import { Environments, ListEnvironmentsRequest } from "../models/models_0";
import { de_ListEnvironmentsCommand, se_ListEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends Environments, __MetadataBearer {}

/**
 * @public
 * <p>Lists the environments for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListEnvironmentsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListEnvironmentsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ListEnvironmentsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // Environments
 * //   Items: [ // EnvironmentList
 * //     { // Environment
 * //       ApplicationId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       State: "READY_FOR_DEPLOYMENT" || "DEPLOYING" || "ROLLING_BACK" || "ROLLED_BACK",
 * //       Monitors: [ // MonitorList
 * //         { // Monitor
 * //           AlarmArn: "STRING_VALUE", // required
 * //           AlarmRoleArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To list the available environments
 * ```javascript
 * // The following list-environments example lists the available environments in your AWS account for the specified application.
 * const input = {
 *   "ApplicationId": "339ohji"
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Items": [
 *     {
 *       "ApplicationId": "339ohji",
 *       "Id": "54j1r29",
 *       "Name": "Example-Environment",
 *       "State": "READY_FOR_DEPLOYMENT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-available-environments-1632267474389
 * ```
 *
 */
export class ListEnvironmentsCommand extends $Command<
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListEnvironmentsCommandInput) {
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
  ): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListEnvironmentsCommand";
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
  private serialize(input: ListEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnvironmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentsCommandOutput> {
    return de_ListEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
