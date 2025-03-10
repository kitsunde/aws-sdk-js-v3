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

import { DescribeSavingsPlansOfferingsRequest, DescribeSavingsPlansOfferingsResponse } from "../models/models_0";
import {
  de_DescribeSavingsPlansOfferingsCommand,
  se_DescribeSavingsPlansOfferingsCommand,
} from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansOfferingsCommand}.
 */
export interface DescribeSavingsPlansOfferingsCommandInput extends DescribeSavingsPlansOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansOfferingsCommand}.
 */
export interface DescribeSavingsPlansOfferingsCommandOutput
  extends DescribeSavingsPlansOfferingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Savings Plans offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansOfferingsRequest
 *   offeringIds: [ // UUIDs
 *     "STRING_VALUE",
 *   ],
 *   paymentOptions: [ // SavingsPlanPaymentOptionList
 *     "STRING_VALUE",
 *   ],
 *   productType: "STRING_VALUE",
 *   planTypes: [ // SavingsPlanTypeList
 *     "STRING_VALUE",
 *   ],
 *   durations: [ // DurationsList
 *     Number("long"),
 *   ],
 *   currencies: [ // CurrencyList
 *     "STRING_VALUE",
 *   ],
 *   descriptions: [ // SavingsPlanDescriptionsList
 *     "STRING_VALUE",
 *   ],
 *   serviceCodes: [ // SavingsPlanServiceCodeList
 *     "STRING_VALUE",
 *   ],
 *   usageTypes: [ // SavingsPlanUsageTypeList
 *     "STRING_VALUE",
 *   ],
 *   operations: [ // SavingsPlanOperationList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // SavingsPlanOfferingFiltersList
 *     { // SavingsPlanOfferingFilterElement
 *       name: "STRING_VALUE",
 *       values: [ // FilterValuesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlansOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansOfferingsResponse
 * //   searchResults: [ // SavingsPlanOfferingsList
 * //     { // SavingsPlanOffering
 * //       offeringId: "STRING_VALUE",
 * //       productTypes: [ // SavingsPlanProductTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       planType: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       paymentOption: "STRING_VALUE",
 * //       durationSeconds: Number("long"),
 * //       currency: "STRING_VALUE",
 * //       serviceCode: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanOfferingPropertyList
 * //         { // SavingsPlanOfferingProperty
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSavingsPlansOfferingsCommandInput - {@link DescribeSavingsPlansOfferingsCommandInput}
 * @returns {@link DescribeSavingsPlansOfferingsCommandOutput}
 * @see {@link DescribeSavingsPlansOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingsCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 */
export class DescribeSavingsPlansOfferingsCommand extends $Command<
  DescribeSavingsPlansOfferingsCommandInput,
  DescribeSavingsPlansOfferingsCommandOutput,
  SavingsplansClientResolvedConfig
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
  constructor(readonly input: DescribeSavingsPlansOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSavingsPlansOfferingsCommandInput, DescribeSavingsPlansOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSavingsPlansOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlansOfferingsCommand";
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
  private serialize(input: DescribeSavingsPlansOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSavingsPlansOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSavingsPlansOfferingsCommandOutput> {
    return de_DescribeSavingsPlansOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
