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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMasterUserPasswordResultFilterSensitiveLog,
} from "../models/models_1";
import {
  de_GetRelationalDatabaseMasterUserPasswordCommand,
  se_GetRelationalDatabaseMasterUserPasswordCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseMasterUserPasswordCommand}.
 */
export interface GetRelationalDatabaseMasterUserPasswordCommandInput
  extends GetRelationalDatabaseMasterUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseMasterUserPasswordCommand}.
 */
export interface GetRelationalDatabaseMasterUserPasswordCommandOutput
  extends GetRelationalDatabaseMasterUserPasswordResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the current, previous, or pending versions of the master user password for a
 *       Lightsail database.</p>
 *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
 *       access control via resource tags applied to the resource identified by
 *       relationalDatabaseName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseMasterUserPasswordRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   passwordVersion: "CURRENT" || "PREVIOUS" || "PENDING",
 * };
 * const command = new GetRelationalDatabaseMasterUserPasswordCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseMasterUserPasswordResult
 * //   masterUserPassword: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseMasterUserPasswordCommandInput - {@link GetRelationalDatabaseMasterUserPasswordCommandInput}
 * @returns {@link GetRelationalDatabaseMasterUserPasswordCommandOutput}
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetRelationalDatabaseMasterUserPasswordCommand extends $Command<
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetRelationalDatabaseMasterUserPasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetRelationalDatabaseMasterUserPasswordCommandInput,
    GetRelationalDatabaseMasterUserPasswordCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetRelationalDatabaseMasterUserPasswordCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseMasterUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetRelationalDatabaseMasterUserPasswordResultFilterSensitiveLog,
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
  private serialize(
    input: GetRelationalDatabaseMasterUserPasswordCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRelationalDatabaseMasterUserPasswordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> {
    return de_GetRelationalDatabaseMasterUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
