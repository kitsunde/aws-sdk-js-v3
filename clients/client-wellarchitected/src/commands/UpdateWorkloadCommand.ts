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

import { UpdateWorkloadInput, UpdateWorkloadOutput } from "../models/models_0";
import { de_UpdateWorkloadCommand, se_UpdateWorkloadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 *
 * The input for {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandInput extends UpdateWorkloadInput {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandOutput extends UpdateWorkloadOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateWorkloadInput
 *   WorkloadId: "STRING_VALUE", // required
 *   WorkloadName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Environment: "PRODUCTION" || "PREPRODUCTION",
 *   AccountIds: [ // WorkloadAccountIds
 *     "STRING_VALUE",
 *   ],
 *   AwsRegions: [ // WorkloadAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   NonAwsRegions: [ // WorkloadNonAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   PillarPriorities: [ // WorkloadPillarPriorities
 *     "STRING_VALUE",
 *   ],
 *   ArchitecturalDesign: "STRING_VALUE",
 *   ReviewOwner: "STRING_VALUE",
 *   IsReviewOwnerUpdateAcknowledged: true || false,
 *   IndustryType: "STRING_VALUE",
 *   Industry: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 *   DiscoveryConfig: { // WorkloadDiscoveryConfig
 *     TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 *     WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 *       "WORKLOAD_METADATA" || "APP_REGISTRY",
 *     ],
 *   },
 *   Applications: [ // WorkloadApplications
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadOutput
 * //   Workload: { // Workload
 * //     WorkloadId: "STRING_VALUE",
 * //     WorkloadArn: "STRING_VALUE",
 * //     WorkloadName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Environment: "PRODUCTION" || "PREPRODUCTION",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     AccountIds: [ // WorkloadAccountIds
 * //       "STRING_VALUE",
 * //     ],
 * //     AwsRegions: [ // WorkloadAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     NonAwsRegions: [ // WorkloadNonAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     ArchitecturalDesign: "STRING_VALUE",
 * //     ReviewOwner: "STRING_VALUE",
 * //     ReviewRestrictionDate: new Date("TIMESTAMP"),
 * //     IsReviewOwnerUpdateAcknowledged: true || false,
 * //     IndustryType: "STRING_VALUE",
 * //     Industry: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //     RiskCounts: { // RiskCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     PillarPriorities: [ // WorkloadPillarPriorities
 * //       "STRING_VALUE",
 * //     ],
 * //     Lenses: [ // WorkloadLenses
 * //       "STRING_VALUE",
 * //     ],
 * //     Owner: "STRING_VALUE",
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     DiscoveryConfig: { // WorkloadDiscoveryConfig
 * //       TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 * //       WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 * //         "WORKLOAD_METADATA" || "APP_REGISTRY",
 * //       ],
 * //     },
 * //     Applications: [ // WorkloadApplications
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadCommandInput - {@link UpdateWorkloadCommandInput}
 * @returns {@link UpdateWorkloadCommandOutput}
 * @see {@link UpdateWorkloadCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class UpdateWorkloadCommand extends $Command<
  UpdateWorkloadCommandInput,
  UpdateWorkloadCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: UpdateWorkloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkloadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateWorkloadCommand";
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
  private serialize(input: UpdateWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkloadCommandOutput> {
    return de_UpdateWorkloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
