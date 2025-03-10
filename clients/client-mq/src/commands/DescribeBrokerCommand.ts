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

import { DescribeBrokerRequest, DescribeBrokerResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_DescribeBrokerCommand, se_DescribeBrokerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeBrokerCommand}.
 */
export interface DescribeBrokerCommandInput extends DescribeBrokerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerCommand}.
 */
export interface DescribeBrokerCommandOutput extends DescribeBrokerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified broker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerRequest
 *   BrokerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBrokerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerResponse
 * //   ActionsRequired: [ // __listOfActionRequired
 * //     { // ActionRequired
 * //       ActionRequiredCode: "STRING_VALUE",
 * //       ActionRequiredInfo: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AuthenticationStrategy: "STRING_VALUE",
 * //   AutoMinorVersionUpgrade: true || false,
 * //   BrokerArn: "STRING_VALUE",
 * //   BrokerId: "STRING_VALUE",
 * //   BrokerInstances: [ // __listOfBrokerInstance
 * //     { // BrokerInstance
 * //       ConsoleURL: "STRING_VALUE",
 * //       Endpoints: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * //   BrokerName: "STRING_VALUE",
 * //   BrokerState: "STRING_VALUE",
 * //   Configurations: { // Configurations
 * //     Current: { // ConfigurationId
 * //       Id: "STRING_VALUE", // required
 * //       Revision: Number("int"),
 * //     },
 * //     History: [ // __listOfConfigurationId
 * //       {
 * //         Id: "STRING_VALUE", // required
 * //         Revision: Number("int"),
 * //       },
 * //     ],
 * //     Pending: {
 * //       Id: "STRING_VALUE", // required
 * //       Revision: Number("int"),
 * //     },
 * //   },
 * //   Created: new Date("TIMESTAMP"),
 * //   DeploymentMode: "STRING_VALUE",
 * //   EncryptionOptions: { // EncryptionOptions
 * //     KmsKeyId: "STRING_VALUE",
 * //     UseAwsOwnedKey: true || false, // required
 * //   },
 * //   EngineType: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   HostInstanceType: "STRING_VALUE",
 * //   LdapServerMetadata: { // LdapServerMetadataOutput
 * //     Hosts: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleBase: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE",
 * //     RoleSearchMatching: "STRING_VALUE", // required
 * //     RoleSearchSubtree: true || false,
 * //     ServiceAccountUsername: "STRING_VALUE", // required
 * //     UserBase: "STRING_VALUE", // required
 * //     UserRoleName: "STRING_VALUE",
 * //     UserSearchMatching: "STRING_VALUE", // required
 * //     UserSearchSubtree: true || false,
 * //   },
 * //   Logs: { // LogsSummary
 * //     Audit: true || false,
 * //     AuditLogGroup: "STRING_VALUE",
 * //     General: true || false, // required
 * //     GeneralLogGroup: "STRING_VALUE", // required
 * //     Pending: { // PendingLogs
 * //       Audit: true || false,
 * //       General: true || false,
 * //     },
 * //   },
 * //   MaintenanceWindowStartTime: { // WeeklyStartTime
 * //     DayOfWeek: "STRING_VALUE", // required
 * //     TimeOfDay: "STRING_VALUE", // required
 * //     TimeZone: "STRING_VALUE",
 * //   },
 * //   PendingAuthenticationStrategy: "STRING_VALUE",
 * //   PendingEngineVersion: "STRING_VALUE",
 * //   PendingHostInstanceType: "STRING_VALUE",
 * //   PendingLdapServerMetadata: {
 * //     Hosts: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleBase: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE",
 * //     RoleSearchMatching: "STRING_VALUE", // required
 * //     RoleSearchSubtree: true || false,
 * //     ServiceAccountUsername: "STRING_VALUE", // required
 * //     UserBase: "STRING_VALUE", // required
 * //     UserRoleName: "STRING_VALUE",
 * //     UserSearchMatching: "STRING_VALUE", // required
 * //     UserSearchSubtree: true || false,
 * //   },
 * //   PendingSecurityGroups: "<__listOf__string>",
 * //   PubliclyAccessible: true || false,
 * //   SecurityGroups: "<__listOf__string>",
 * //   StorageType: "STRING_VALUE",
 * //   SubnetIds: "<__listOf__string>",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Users: [ // __listOfUserSummary
 * //     { // UserSummary
 * //       PendingChange: "STRING_VALUE",
 * //       Username: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBrokerCommandInput - {@link DescribeBrokerCommandInput}
 * @returns {@link DescribeBrokerCommandOutput}
 * @see {@link DescribeBrokerCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class DescribeBrokerCommand extends $Command<
  DescribeBrokerCommandInput,
  DescribeBrokerCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: DescribeBrokerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBrokerCommandInput, DescribeBrokerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBrokerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerCommand";
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
  private serialize(input: DescribeBrokerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBrokerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBrokerCommandOutput> {
    return de_DescribeBrokerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
