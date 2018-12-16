module Accordion exposing
    ( Model
    , Msg
    , init
    , update
    , view
    )

import Html exposing (Attribute, Html, div, text)
import Html.Attributes as Attributes exposing (attribute, class, style)
import Html.Events as Events
import Json.Decode as Decode exposing (Decoder, Value)



-- MODEL


type alias Model =
    { isOpen : Bool
    , maxHeight : Maybe Int
    }


init : ( Model, Cmd Msg )
init =
    ( { isOpen = False
      , maxHeight = Nothing
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = ClickTitle Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ClickTitle height ->
            ( { isOpen = not model.isOpen
              , maxHeight = Just height
              }
            , Cmd.none
            )



-- VIEW


view : String -> Model -> Html Msg
view content model =
    div
        [ class "wrapper"
        , attribute "aria-hidden" <|
            if model.isOpen then
                "false"

            else
                "true"
        ]
        [ div
            [ class "title"
            , Events.on "click" (Decode.map ClickTitle maxHeight)
            ]
            [ text "Accordion"
            ]
        , div
            [ class "body"
            , style "max-height" <|
                case model.maxHeight of
                    Nothing ->
                        ""

                    Just n ->
                        String.fromInt n ++ "px"
            ]
            [ div
                [ class "content"
                ]
                [ text content
                ]
            ]
        ]


maxHeight : Decoder Int
maxHeight =
    Decode.at
        [ "target"
        , "parentElement"
        , "children"
        , "1"
        , "scrollHeight"
        ]
        Decode.int



-- Helper functions


{-| Alternative to Html.Attributes.class.
It automatically generates composed class name by CSS modules.
-}
class : String -> Attribute msg
class name =
    Attributes.class <| "accordion__" ++ name
