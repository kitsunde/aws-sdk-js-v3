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
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { StopProductSubscriptionRequest, StopProductSubscriptionResponse } from "../models/models_0";
import { de_StopProductSubscriptionCommand, se_StopProductSubscriptionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StopProductSubscriptionCommand}.
 */
export interface StopProductSubscriptionCommandInput extends StopProductSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StopProductSubscriptionCommand}.
 */
export interface StopProductSubscriptionCommandOutput extends StopProductSubscriptionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops a product subscription for a user with the specified identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, StopProductSubscriptionCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, StopProductSubscriptionCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // StopProductSubscriptionRequest
 *   Username: "STRING_VALUE", // required
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *     },
 *   },
 *   Product: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 * };
 * const command = new StopProductSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StopProductSubscriptionResponse
 * //   ProductUserSummary: { // ProductUserSummary
 * //     Username: "STRING_VALUE", // required
 * //     Product: "STRING_VALUE", // required
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: "STRING_VALUE", // required
 * //     StatusMessage: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     SubscriptionStartDate: "STRING_VALUE",
 * //     SubscriptionEndDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopProductSubscriptionCommandInput - {@link StopProductSubscriptionCommandInput}
 * @returns {@link StopProductSubscriptionCommandOutput}
 * @see {@link StopProductSubscriptionCommandInput} for command's `input` shape.
 * @see {@link StopProductSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 */
export class StopProductSubscriptionCommand extends $Command<
  StopProductSubscriptionCommandInput,
  StopProductSubscriptionCommandOutput,
  LicenseManagerUserSubscriptionsClientResolvedConfig
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
  constructor(readonly input: StopProductSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerUserSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopProductSubscriptionCommandInput, StopProductSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopProductSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "StopProductSubscriptionCommand";
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
  private serialize(input: StopProductSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopProductSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopProductSubscriptionCommandOutput> {
    return de_StopProductSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
