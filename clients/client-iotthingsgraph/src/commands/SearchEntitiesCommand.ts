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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchEntitiesRequest, SearchEntitiesResponse } from "../models/models_0";
import { de_SearchEntitiesCommand, se_SearchEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link SearchEntitiesCommand}.
 */
export interface SearchEntitiesCommandInput extends SearchEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link SearchEntitiesCommand}.
 */
export interface SearchEntitiesCommandOutput extends SearchEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchEntitiesRequest
 *   entityTypes: [ // EntityTypes // required
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // EntityFilters
 *     { // EntityFilter
 *       name: "STRING_VALUE",
 *       value: [ // EntityFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceVersion: Number("long"),
 * };
 * const command = new SearchEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // SearchEntitiesResponse
 * //   descriptions: [ // EntityDescriptions
 * //     { // EntityDescription
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       definition: { // DefinitionDocument
 * //         language: "STRING_VALUE", // required
 * //         text: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchEntitiesCommandInput - {@link SearchEntitiesCommandInput}
 * @returns {@link SearchEntitiesCommandOutput}
 * @see {@link SearchEntitiesCommandInput} for command's `input` shape.
 * @see {@link SearchEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class SearchEntitiesCommand extends $Command<
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: SearchEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchEntitiesCommandInput, SearchEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "SearchEntitiesCommand";
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
  private serialize(input: SearchEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchEntitiesCommandOutput> {
    return de_SearchEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
