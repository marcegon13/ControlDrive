.class final Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;
.super Lkotlin/jvm/internal/Lambda;
.source "TextField.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function2;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/compose/material/TextFieldKt;->TextFieldLayout-uBqXD2s(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/text/input/TextFieldValue;Lkotlin/jvm/functions/Function1;ZZLandroidx/compose/foundation/text/KeyboardOptions;Landroidx/compose/foundation/text/KeyboardActions;Landroidx/compose/ui/text/TextStyle;ZILandroidx/compose/ui/text/input/VisualTransformation;Landroidx/compose/foundation/interaction/MutableInteractionSource;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;JJFFJJJLandroidx/compose/ui/graphics/Shape;Landroidx/compose/runtime/Composer;IIII)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lkotlin/jvm/internal/Lambda;",
        "Lkotlin/jvm/functions/Function2<",
        "Landroidx/compose/runtime/Composer;",
        "Ljava/lang/Integer;",
        "Lkotlin/Unit;",
        ">;"
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic $$changed:I

.field final synthetic $$changed1:I

.field final synthetic $$changed2:I

.field final synthetic $$default:I

.field final synthetic $backgroundColor:J

.field final synthetic $cursorColor:J

.field final synthetic $decoratedLabel:Lkotlin/jvm/functions/Function2;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function2<",
            "Landroidx/compose/runtime/Composer;",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $decoratedPlaceholder:Lkotlin/jvm/functions/Function3;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function3<",
            "Landroidx/compose/ui/Modifier;",
            "Landroidx/compose/runtime/Composer;",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $enabled:Z

.field final synthetic $indicatorColor:J

.field final synthetic $indicatorWidth:F

.field final synthetic $interactionSource:Landroidx/compose/foundation/interaction/MutableInteractionSource;

.field final synthetic $keyboardActions:Landroidx/compose/foundation/text/KeyboardActions;

.field final synthetic $keyboardOptions:Landroidx/compose/foundation/text/KeyboardOptions;

.field final synthetic $labelProgress:F

.field final synthetic $leading:Lkotlin/jvm/functions/Function2;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function2<",
            "Landroidx/compose/runtime/Composer;",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $leadingColor:J

.field final synthetic $maxLines:I

.field final synthetic $modifier:Landroidx/compose/ui/Modifier;

.field final synthetic $onValueChange:Lkotlin/jvm/functions/Function1;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function1<",
            "Landroidx/compose/ui/text/input/TextFieldValue;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $readOnly:Z

.field final synthetic $shape:Landroidx/compose/ui/graphics/Shape;

.field final synthetic $singleLine:Z

.field final synthetic $textStyle:Landroidx/compose/ui/text/TextStyle;

.field final synthetic $trailing:Lkotlin/jvm/functions/Function2;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function2<",
            "Landroidx/compose/runtime/Composer;",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $trailingColor:J

.field final synthetic $value:Landroidx/compose/ui/text/input/TextFieldValue;

.field final synthetic $visualTransformation:Landroidx/compose/ui/text/input/VisualTransformation;


# direct methods
.method constructor <init>(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/text/input/TextFieldValue;Lkotlin/jvm/functions/Function1;ZZLandroidx/compose/foundation/text/KeyboardOptions;Landroidx/compose/foundation/text/KeyboardActions;Landroidx/compose/ui/text/TextStyle;ZILandroidx/compose/ui/text/input/VisualTransformation;Landroidx/compose/foundation/interaction/MutableInteractionSource;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;JJFFJJJLandroidx/compose/ui/graphics/Shape;IIII)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/compose/ui/Modifier;",
            "Landroidx/compose/ui/text/input/TextFieldValue;",
            "Lkotlin/jvm/functions/Function1<",
            "-",
            "Landroidx/compose/ui/text/input/TextFieldValue;",
            "Lkotlin/Unit;",
            ">;ZZ",
            "Landroidx/compose/foundation/text/KeyboardOptions;",
            "Landroidx/compose/foundation/text/KeyboardActions;",
            "Landroidx/compose/ui/text/TextStyle;",
            "ZI",
            "Landroidx/compose/ui/text/input/VisualTransformation;",
            "Landroidx/compose/foundation/interaction/MutableInteractionSource;",
            "Lkotlin/jvm/functions/Function3<",
            "-",
            "Landroidx/compose/ui/Modifier;",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;",
            "Lkotlin/jvm/functions/Function2<",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;",
            "Lkotlin/jvm/functions/Function2<",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;",
            "Lkotlin/jvm/functions/Function2<",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;JJFFJJJ",
            "Landroidx/compose/ui/graphics/Shape;",
            "IIII)V"
        }
    .end annotation

    iput-object p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$modifier:Landroidx/compose/ui/Modifier;

    iput-object p2, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$value:Landroidx/compose/ui/text/input/TextFieldValue;

    iput-object p3, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$onValueChange:Lkotlin/jvm/functions/Function1;

    iput-boolean p4, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$enabled:Z

    iput-boolean p5, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$readOnly:Z

    iput-object p6, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$keyboardOptions:Landroidx/compose/foundation/text/KeyboardOptions;

    iput-object p7, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$keyboardActions:Landroidx/compose/foundation/text/KeyboardActions;

    iput-object p8, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$textStyle:Landroidx/compose/ui/text/TextStyle;

    iput-boolean p9, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$singleLine:Z

    iput p10, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$maxLines:I

    iput-object p11, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$visualTransformation:Landroidx/compose/ui/text/input/VisualTransformation;

    iput-object p12, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$interactionSource:Landroidx/compose/foundation/interaction/MutableInteractionSource;

    iput-object p13, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$decoratedPlaceholder:Lkotlin/jvm/functions/Function3;

    iput-object p14, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$decoratedLabel:Lkotlin/jvm/functions/Function2;

    iput-object p15, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$leading:Lkotlin/jvm/functions/Function2;

    move-object/from16 p1, p16

    iput-object p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$trailing:Lkotlin/jvm/functions/Function2;

    move-wide/from16 p1, p17

    iput-wide p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$leadingColor:J

    move-wide/from16 p1, p19

    iput-wide p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$trailingColor:J

    move/from16 p1, p21

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$labelProgress:F

    move/from16 p1, p22

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$indicatorWidth:F

    move-wide/from16 p1, p23

    iput-wide p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$indicatorColor:J

    move-wide/from16 p1, p25

    iput-wide p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$backgroundColor:J

    move-wide/from16 p1, p27

    iput-wide p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$cursorColor:J

    move-object/from16 p1, p29

    iput-object p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$shape:Landroidx/compose/ui/graphics/Shape;

    move/from16 p1, p30

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed:I

    move/from16 p1, p31

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed1:I

    move/from16 p1, p32

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed2:I

    move/from16 p1, p33

    iput p1, p0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$default:I

    const/4 p1, 0x2

    invoke-direct {p0, p1}, Lkotlin/jvm/internal/Lambda;-><init>(I)V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    check-cast p1, Landroidx/compose/runtime/Composer;

    check-cast p2, Ljava/lang/Number;

    invoke-virtual {p2}, Ljava/lang/Number;->intValue()I

    move-result p2

    invoke-virtual {p0, p1, p2}, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->invoke(Landroidx/compose/runtime/Composer;I)V

    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1
.end method

.method public final invoke(Landroidx/compose/runtime/Composer;I)V
    .locals 37

    move-object/from16 v0, p0

    iget-object v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$modifier:Landroidx/compose/ui/Modifier;

    iget-object v2, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$value:Landroidx/compose/ui/text/input/TextFieldValue;

    iget-object v3, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$onValueChange:Lkotlin/jvm/functions/Function1;

    iget-boolean v4, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$enabled:Z

    iget-boolean v5, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$readOnly:Z

    iget-object v6, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$keyboardOptions:Landroidx/compose/foundation/text/KeyboardOptions;

    iget-object v7, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$keyboardActions:Landroidx/compose/foundation/text/KeyboardActions;

    iget-object v8, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$textStyle:Landroidx/compose/ui/text/TextStyle;

    iget-boolean v9, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$singleLine:Z

    iget v10, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$maxLines:I

    iget-object v11, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$visualTransformation:Landroidx/compose/ui/text/input/VisualTransformation;

    iget-object v12, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$interactionSource:Landroidx/compose/foundation/interaction/MutableInteractionSource;

    iget-object v13, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$decoratedPlaceholder:Lkotlin/jvm/functions/Function3;

    iget-object v14, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$decoratedLabel:Lkotlin/jvm/functions/Function2;

    iget-object v15, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$leading:Lkotlin/jvm/functions/Function2;

    move-object/from16 v16, v1

    iget-object v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$trailing:Lkotlin/jvm/functions/Function2;

    move-object/from16 v18, v1

    move-object/from16 v17, v2

    iget-wide v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$leadingColor:J

    move-wide/from16 v19, v1

    iget-wide v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$trailingColor:J

    move-wide/from16 v21, v1

    iget v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$labelProgress:F

    iget v2, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$indicatorWidth:F

    move/from16 v23, v1

    move/from16 v24, v2

    iget-wide v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$indicatorColor:J

    move-wide/from16 v25, v1

    iget-wide v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$backgroundColor:J

    move-wide/from16 v27, v1

    iget-wide v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$cursorColor:J

    move-wide/from16 v29, v1

    iget-object v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$shape:Landroidx/compose/ui/graphics/Shape;

    iget v2, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed:I

    or-int/lit8 v31, v2, 0x1

    iget v2, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed1:I

    move-object/from16 v32, v1

    iget v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$changed2:I

    move/from16 v33, v1

    iget v1, v0, Landroidx/compose/material/TextFieldKt$TextFieldLayout$2;->$$default:I

    move/from16 v34, v1

    move-object/from16 v1, v16

    move-object/from16 v16, v18

    move-wide/from16 v35, v29

    move-object/from16 v30, p1

    move-object/from16 v29, v32

    move/from16 v32, v2

    move-object/from16 v2, v17

    move-wide/from16 v17, v19

    move-wide/from16 v19, v21

    move/from16 v21, v23

    move/from16 v22, v24

    move-wide/from16 v23, v25

    move-wide/from16 v25, v27

    move-wide/from16 v27, v35

    invoke-static/range {v1 .. v34}, Landroidx/compose/material/TextFieldKt;->TextFieldLayout-uBqXD2s(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/text/input/TextFieldValue;Lkotlin/jvm/functions/Function1;ZZLandroidx/compose/foundation/text/KeyboardOptions;Landroidx/compose/foundation/text/KeyboardActions;Landroidx/compose/ui/text/TextStyle;ZILandroidx/compose/ui/text/input/VisualTransformation;Landroidx/compose/foundation/interaction/MutableInteractionSource;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;JJFFJJJLandroidx/compose/ui/graphics/Shape;Landroidx/compose/runtime/Composer;IIII)V

    return-void
.end method
