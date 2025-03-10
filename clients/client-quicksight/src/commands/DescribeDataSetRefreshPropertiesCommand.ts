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

import { DescribeDataSetRefreshPropertiesRequest, DescribeDataSetRefreshPropertiesResponse } from "../models/models_2";
import {
  de_DescribeDataSetRefreshPropertiesCommand,
  se_DescribeDataSetRefreshPropertiesCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link DescribeDataSetRefreshPropertiesCommand}.
 */
export interface DescribeDataSetRefreshPropertiesCommandInput extends DescribeDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSetRefreshPropertiesCommand}.
 */
export interface DescribeDataSetRefreshPropertiesCommandOutput
  extends DescribeDataSetRefreshPropertiesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the refresh properties of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   DataSetRefreshProperties: { // DataSetRefreshProperties
 * //     RefreshConfiguration: { // RefreshConfiguration
 * //       IncrementalRefresh: { // IncrementalRefresh
 * //         LookbackWindow: { // LookbackWindow
 * //           ColumnName: "STRING_VALUE", // required
 * //           Size: Number("long"), // required
 * //           SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDataSetRefreshPropertiesCommandInput - {@link DescribeDataSetRefreshPropertiesCommandInput}
 * @returns {@link DescribeDataSetRefreshPropertiesCommandOutput}
 * @see {@link DescribeDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DescribeDataSetRefreshPropertiesCommand extends $Command<
  DescribeDataSetRefreshPropertiesCommandInput,
  DescribeDataSetRefreshPropertiesCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: DescribeDataSetRefreshPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSetRefreshPropertiesCommandInput, DescribeDataSetRefreshPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataSetRefreshPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDataSetRefreshPropertiesCommand";
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
  private serialize(
    input: DescribeDataSetRefreshPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDataSetRefreshPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSetRefreshPropertiesCommandOutput> {
    return de_DescribeDataSetRefreshPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
