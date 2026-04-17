.class final Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;
.super Lkotlin/jvm/internal/Lambda;
.source "OutlinedTextField.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function3;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/compose/material/OutlinedTextFieldKt;->OutlinedTextFieldLayout-Sac-xI0(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/text/input/TextFieldValue;Lkotlin/jvm/functions/Function1;ZZLandroidx/compose/foundation/text/KeyboardOptions;Landroidx/compose/foundation/text/KeyboardActions;Landroidx/compose/ui/text/TextStyle;ZILandroidx/compose/ui/text/input/VisualTransformation;Landroidx/compose/foundation/interaction/MutableInteractionSource;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;JJFFJJLandroidx/compose/ui/graphics/Shape;Landroidx/compose/runtime/Composer;IIII)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lkotlin/jvm/internal/Lambda;",
        "Lkotlin/jvm/functions/Function3<",
        "Lkotlin/jvm/functions/Function2<",
        "-",
        "Landroidx/compose/runtime/Composer;",
        "-",
        "Ljava/lang/Integer;",
        "+",
        "Lkotlin/Unit;",
        ">;",
        "Landroidx/compose/runtime/Composer;",
        "Ljava/lang/Integer;",
        "Lkotlin/Unit;",
        ">;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nOutlinedTextField.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OutlinedTextField.kt\nandroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1\n+ 2 Composables.kt\nandroidx/compose/runtime/ComposablesKt\n+ 3 Composer.kt\nandroidx/compose/runtime/ComposerKt\n*L\n1#1,724:1\n50#2:725\n49#2:726\n955#3,6:727\n*S KotlinDebug\n*F\n+ 1 OutlinedTextField.kt\nandroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1\n*L\n348#1:725\n348#1:726\n348#1:727,6\n*E\n"
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
.field final synthetic $$dirty:I

.field final synthetic $$dirty1:I

.field final synthetic $$dirty2:I

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

.field final synthetic $indicatorColor:J

.field final synthetic $indicatorWidth:F

.field final synthetic $labelProgress:F

.field final synthetic $labelSize:Landroidx/compose/runtime/MutableState;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/compose/runtime/MutableState<",
            "Landroidx/compose/ui/geometry/Size;",
            ">;"
        }
    .end annotation
.end field

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

.field final synthetic $shape:Landroidx/compose/ui/graphics/Shape;

.field final synthetic $singleLine:Z

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


# direct methods
.method constructor <init>(Landroidx/compose/runtime/MutableState;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;ZJJFILandroidx/compose/ui/graphics/Shape;FJII)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/compose/runtime/MutableState<",
            "Landroidx/compose/ui/geometry/Size;",
            ">;",
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
            ">;ZJJFI",
            "Landroidx/compose/ui/graphics/Shape;",
            "FJII)V"
        }
    .end annotation

    iput-object p1, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelSize:Landroidx/compose/runtime/MutableState;

    iput-object p2, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$decoratedPlaceholder:Lkotlin/jvm/functions/Function3;

    iput-object p3, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$decoratedLabel:Lkotlin/jvm/functions/Function2;

    iput-object p4, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$leading:Lkotlin/jvm/functions/Function2;

    iput-object p5, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$trailing:Lkotlin/jvm/functions/Function2;

    iput-boolean p6, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$singleLine:Z

    iput-wide p7, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$leadingColor:J

    iput-wide p9, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$trailingColor:J

    iput p11, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelProgress:F

    iput p12, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty1:I

    iput-object p13, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$shape:Landroidx/compose/ui/graphics/Shape;

    iput p14, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$indicatorWidth:F

    move-wide p1, p15

    iput-wide p1, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$indicatorColor:J

    move/from16 p1, p17

    iput p1, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty:I

    move/from16 p1, p18

    iput p1, p0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty2:I

    const/4 p1, 0x3

    invoke-direct {p0, p1}, Lkotlin/jvm/internal/Lambda;-><init>(I)V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 339
    check-cast p1, Lkotlin/jvm/functions/Function2;

    check-cast p2, Landroidx/compose/runtime/Composer;

    check-cast p3, Ljava/lang/Number;

    invoke-virtual {p3}, Ljava/lang/Number;->intValue()I

    move-result p3

    invoke-virtual {p0, p1, p2, p3}, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->invoke(Lkotlin/jvm/functions/Function2;Landroidx/compose/runtime/Composer;I)V

    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1
.end method

.method public final invoke(Lkotlin/jvm/functions/Function2;Landroidx/compose/runtime/Composer;I)V
    .locals 22
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lkotlin/jvm/functions/Function2<",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;",
            "Landroidx/compose/runtime/Composer;",
            "I)V"
        }
    .end annotation

    move-object/from16 v0, p0

    move-object/from16 v1, p1

    move-object/from16 v2, p2

    const-string v3, "coreTextField"

    invoke-static {v1, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v3, "C347@17224L388,340@16916L1021:OutlinedTextField.kt#jmzs0o"

    invoke-static {v2, v3}, Landroidx/compose/runtime/ComposerKt;->sourceInformation(Landroidx/compose/runtime/Composer;Ljava/lang/String;)V

    and-int/lit8 v3, p3, 0xe

    if-nez v3, :cond_1

    invoke-interface {v2, v1}, Landroidx/compose/runtime/Composer;->changed(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_0

    const/4 v3, 0x4

    goto :goto_0

    :cond_0
    const/4 v3, 0x2

    :goto_0
    or-int v3, p3, v3

    goto :goto_1

    :cond_1
    move/from16 v3, p3

    :goto_1
    and-int/lit8 v4, v3, 0x5b

    xor-int/lit8 v4, v4, 0x12

    if-nez v4, :cond_3

    .line 341
    invoke-interface {v2}, Landroidx/compose/runtime/Composer;->getSkipping()Z

    move-result v4

    if-nez v4, :cond_2

    goto :goto_2

    .line 364
    :cond_2
    invoke-interface {v2}, Landroidx/compose/runtime/Composer;->skipToGroupEnd()V

    return-void

    .line 363
    :cond_3
    :goto_2
    iget-object v4, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelSize:Landroidx/compose/runtime/MutableState;

    invoke-interface {v4}, Landroidx/compose/runtime/MutableState;->getValue()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Landroidx/compose/ui/geometry/Size;

    invoke-virtual {v4}, Landroidx/compose/ui/geometry/Size;->unbox-impl()J

    move-result-wide v17

    .line 358
    iget-object v4, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$decoratedPlaceholder:Lkotlin/jvm/functions/Function3;

    move v5, v3

    .line 359
    iget-object v3, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$decoratedLabel:Lkotlin/jvm/functions/Function2;

    move-object v6, v4

    .line 343
    iget-object v4, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$leading:Lkotlin/jvm/functions/Function2;

    move v7, v5

    .line 344
    iget-object v5, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$trailing:Lkotlin/jvm/functions/Function2;

    move-object v8, v6

    .line 345
    iget-boolean v6, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$singleLine:Z

    move v9, v7

    move-object v10, v8

    .line 346
    iget-wide v7, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$leadingColor:J

    move v11, v9

    move-object v12, v10

    .line 347
    iget-wide v9, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$trailingColor:J

    move v13, v11

    .line 357
    iget v11, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelProgress:F

    .line 348
    invoke-static {v11}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object v14

    iget-object v15, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelSize:Landroidx/compose/runtime/MutableState;

    iget v1, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$labelProgress:F

    move-object/from16 v16, v3

    const v3, -0x384098

    invoke-interface {v2, v3}, Landroidx/compose/runtime/Composer;->startReplaceableGroup(I)V

    const-string v3, "C(remember)P(1,2):Composables.kt#9igjgp"

    invoke-static {v2, v3}, Landroidx/compose/runtime/ComposerKt;->sourceInformation(Landroidx/compose/runtime/Composer;Ljava/lang/String;)V

    .line 725
    invoke-interface {v2, v14}, Landroidx/compose/runtime/Composer;->changed(Ljava/lang/Object;)Z

    move-result v3

    invoke-interface {v2, v15}, Landroidx/compose/runtime/Composer;->changed(Ljava/lang/Object;)Z

    move-result v14

    or-int/2addr v3, v14

    .line 727
    invoke-interface {v2}, Landroidx/compose/runtime/Composer;->rememberedValue()Ljava/lang/Object;

    move-result-object v14

    if-nez v3, :cond_4

    .line 728
    sget-object v3, Landroidx/compose/runtime/Composer;->Companion:Landroidx/compose/runtime/Composer$Companion;

    invoke-virtual {v3}, Landroidx/compose/runtime/Composer$Companion;->getEmpty()Ljava/lang/Object;

    move-result-object v3

    if-ne v14, v3, :cond_5

    .line 348
    :cond_4
    new-instance v3, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1$1$1;

    invoke-direct {v3, v1, v15}, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1$1$1;-><init>(FLandroidx/compose/runtime/MutableState;)V

    move-object v14, v3

    check-cast v14, Lkotlin/jvm/functions/Function1;

    .line 730
    invoke-interface {v2, v14}, Landroidx/compose/runtime/Composer;->updateRememberedValue(Ljava/lang/Object;)V

    .line 726
    :cond_5
    invoke-interface {v2}, Landroidx/compose/runtime/Composer;->endReplaceableGroup()V

    check-cast v14, Lkotlin/jvm/functions/Function1;

    move v3, v13

    .line 360
    iget-object v13, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$shape:Landroidx/compose/ui/graphics/Shape;

    move-object v2, v12

    move-object v12, v14

    .line 361
    iget v14, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$indicatorWidth:F

    move-object/from16 p3, v2

    .line 362
    iget-wide v1, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$indicatorColor:J

    and-int/lit8 v3, v3, 0xe

    .line 363
    iget v15, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty1:I

    shr-int/lit8 v19, v15, 0x3

    and-int/lit8 v19, v19, 0x70

    or-int v3, v3, v19

    move-wide/from16 v19, v1

    shr-int/lit8 v1, v15, 0x3

    and-int/lit16 v1, v1, 0x380

    or-int/2addr v1, v3

    shr-int/lit8 v2, v15, 0x3

    and-int/lit16 v2, v2, 0x1c00

    or-int/2addr v1, v2

    const v2, 0xe000

    shr-int/lit8 v3, v15, 0x3

    and-int/2addr v2, v3

    or-int/2addr v1, v2

    iget v2, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty:I

    shr-int/lit8 v2, v2, 0x9

    const/high16 v3, 0x70000

    and-int/2addr v2, v3

    or-int/2addr v1, v2

    const/high16 v2, 0x380000

    and-int/2addr v2, v15

    or-int/2addr v1, v2

    const/high16 v2, 0x1c00000

    and-int/2addr v2, v15

    or-int/2addr v1, v2

    const/high16 v2, 0xe000000

    and-int/2addr v2, v15

    or-int/2addr v1, v2

    iget v2, v0, Landroidx/compose/material/OutlinedTextFieldKt$OutlinedTextFieldLayout$1;->$$dirty2:I

    shr-int/lit8 v3, v2, 0x6

    and-int/lit8 v3, v3, 0xe

    shr-int/lit8 v15, v15, 0x18

    and-int/lit8 v15, v15, 0x70

    or-int/2addr v3, v15

    shl-int/lit8 v2, v2, 0x6

    and-int/lit16 v2, v2, 0x380

    or-int v21, v3, v2

    move-object/from16 v2, p3

    move-object/from16 v3, v16

    move-wide/from16 v15, v19

    move-object/from16 v19, p2

    move/from16 v20, v1

    move-object/from16 v1, p1

    .line 341
    invoke-static/range {v1 .. v21}, Landroidx/compose/material/OutlinedTextFieldKt;->access$IconsWithTextFieldLayout-T2E5_Oc(Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;ZJJFLkotlin/jvm/functions/Function1;Landroidx/compose/ui/graphics/Shape;FJJLandroidx/compose/runtime/Composer;II)V

    return-void
.end method
