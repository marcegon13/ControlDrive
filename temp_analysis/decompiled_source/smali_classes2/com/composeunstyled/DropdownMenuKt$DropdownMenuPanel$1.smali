.class final Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;
.super Ljava/lang/Object;
.source "DropdownMenu.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function2;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/composeunstyled/DropdownMenuKt;->DropdownMenuPanel--qGb434(ZLkotlin/jvm/functions/Function0;Landroidx/compose/ui/Modifier;Lcom/composeunstyled/DropdownPanelAnchor;Landroidx/compose/ui/graphics/Shape;JJLandroidx/compose/foundation/layout/PaddingValues;Landroidx/compose/animation/EnterTransition;Landroidx/compose/animation/ExitTransition;Lkotlin/jvm/functions/Function3;Landroidx/compose/runtime/Composer;III)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lkotlin/jvm/functions/Function2<",
        "Landroidx/compose/runtime/Composer;",
        "Ljava/lang/Integer;",
        "Lkotlin/Unit;",
        ">;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nDropdownMenu.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DropdownMenu.kt\ncom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1\n+ 2 CompositionLocal.kt\nandroidx/compose/runtime/CompositionLocal\n+ 3 Composer.kt\nandroidx/compose/runtime/ComposerKt\n*L\n1#1,165:1\n75#2:166\n1247#3,6:167\n*S KotlinDebug\n*F\n+ 1 DropdownMenu.kt\ncom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1\n*L\n82#1:166\n88#1:167,6\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic $backgroundColor:J

.field final synthetic $content:Lkotlin/jvm/functions/Function3;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function3<",
            "Landroidx/compose/foundation/layout/ColumnScope;",
            "Landroidx/compose/runtime/Composer;",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $contentColor:J

.field final synthetic $contentPadding:Landroidx/compose/foundation/layout/PaddingValues;

.field final synthetic $enter:Landroidx/compose/animation/EnterTransition;

.field final synthetic $exit:Landroidx/compose/animation/ExitTransition;

.field final synthetic $menuFocusRequester:Landroidx/compose/ui/focus/FocusRequester;

.field final synthetic $modifier:Landroidx/compose/ui/Modifier;

.field final synthetic $onDismissRequest:Lkotlin/jvm/functions/Function0;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lkotlin/jvm/functions/Function0<",
            "Lkotlin/Unit;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $shape:Landroidx/compose/ui/graphics/Shape;

.field final synthetic $transitionState:Landroidx/compose/animation/core/MutableTransitionState;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/compose/animation/core/MutableTransitionState<",
            "Ljava/lang/Boolean;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Lkotlin/jvm/functions/Function0;Landroidx/compose/animation/core/MutableTransitionState;Landroidx/compose/animation/EnterTransition;Landroidx/compose/animation/ExitTransition;Landroidx/compose/ui/Modifier;Landroidx/compose/ui/focus/FocusRequester;Landroidx/compose/ui/graphics/Shape;JLandroidx/compose/foundation/layout/PaddingValues;JLkotlin/jvm/functions/Function3;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lkotlin/jvm/functions/Function0<",
            "Lkotlin/Unit;",
            ">;",
            "Landroidx/compose/animation/core/MutableTransitionState<",
            "Ljava/lang/Boolean;",
            ">;",
            "Landroidx/compose/animation/EnterTransition;",
            "Landroidx/compose/animation/ExitTransition;",
            "Landroidx/compose/ui/Modifier;",
            "Landroidx/compose/ui/focus/FocusRequester;",
            "Landroidx/compose/ui/graphics/Shape;",
            "J",
            "Landroidx/compose/foundation/layout/PaddingValues;",
            "J",
            "Lkotlin/jvm/functions/Function3<",
            "-",
            "Landroidx/compose/foundation/layout/ColumnScope;",
            "-",
            "Landroidx/compose/runtime/Composer;",
            "-",
            "Ljava/lang/Integer;",
            "Lkotlin/Unit;",
            ">;)V"
        }
    .end annotation

    iput-object p1, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$onDismissRequest:Lkotlin/jvm/functions/Function0;

    iput-object p2, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$transitionState:Landroidx/compose/animation/core/MutableTransitionState;

    iput-object p3, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$enter:Landroidx/compose/animation/EnterTransition;

    iput-object p4, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$exit:Landroidx/compose/animation/ExitTransition;

    iput-object p5, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$modifier:Landroidx/compose/ui/Modifier;

    iput-object p6, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$menuFocusRequester:Landroidx/compose/ui/focus/FocusRequester;

    iput-object p7, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$shape:Landroidx/compose/ui/graphics/Shape;

    iput-wide p8, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$backgroundColor:J

    iput-object p10, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$contentPadding:Landroidx/compose/foundation/layout/PaddingValues;

    iput-wide p11, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$contentColor:J

    iput-object p13, p0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$content:Lkotlin/jvm/functions/Function3;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 81
    check-cast p1, Landroidx/compose/runtime/Composer;

    check-cast p2, Ljava/lang/Number;

    invoke-virtual {p2}, Ljava/lang/Number;->intValue()I

    move-result p2

    invoke-virtual {p0, p1, p2}, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->invoke(Landroidx/compose/runtime/Composer;I)V

    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1
.end method

.method public final invoke(Landroidx/compose/runtime/Composer;I)V
    .locals 19

    move-object/from16 v0, p0

    move-object/from16 v7, p1

    move/from16 v1, p2

    and-int/lit8 v2, v1, 0x3

    const/4 v3, 0x2

    if-ne v2, v3, :cond_1

    invoke-interface {v7}, Landroidx/compose/runtime/Composer;->getSkipping()Z

    move-result v2

    if-nez v2, :cond_0

    goto :goto_0

    .line 84
    :cond_0
    invoke-interface {v7}, Landroidx/compose/runtime/Composer;->skipToGroupEnd()V

    return-void

    .line 0
    :cond_1
    :goto_0
    invoke-static {}, Landroidx/compose/runtime/ComposerKt;->isTraceInProgress()Z

    move-result v2

    if-eqz v2, :cond_2

    const/4 v2, -0x1

    const-string v3, "com.composeunstyled.DropdownMenuPanel.<anonymous> (DropdownMenu.kt:81)"

    const v4, 0x51cf4977

    invoke-static {v4, v1, v2, v3}, Landroidx/compose/runtime/ComposerKt;->traceEventStart(IIILjava/lang/String;)V

    .line 82
    :cond_2
    invoke-static {}, Landroidx/compose/ui/platform/CompositionLocalsKt;->getLocalFocusManager()Landroidx/compose/runtime/ProvidableCompositionLocal;

    move-result-object v1

    check-cast v1, Landroidx/compose/runtime/CompositionLocal;

    const v2, 0x789c5f52

    const-string v3, "CC(<get-current>):CompositionLocal.kt#9igjgp"

    .line 166
    invoke-static {v7, v2, v3}, Landroidx/compose/runtime/ComposerKt;->sourceInformationMarkerStart(Landroidx/compose/runtime/Composer;ILjava/lang/String;)V

    invoke-interface {v7, v1}, Landroidx/compose/runtime/Composer;->consume(Landroidx/compose/runtime/CompositionLocal;)Ljava/lang/Object;

    move-result-object v1

    invoke-static {v7}, Landroidx/compose/runtime/ComposerKt;->sourceInformationMarkerEnd(Landroidx/compose/runtime/Composer;)V

    .line 82
    check-cast v1, Landroidx/compose/ui/focus/FocusManager;

    .line 88
    sget-object v2, Landroidx/compose/ui/Modifier;->Companion:Landroidx/compose/ui/Modifier$Companion;

    check-cast v2, Landroidx/compose/ui/Modifier;

    const v3, -0x615d173a

    invoke-interface {v7, v3}, Landroidx/compose/runtime/Composer;->startReplaceGroup(I)V

    invoke-interface {v7, v1}, Landroidx/compose/runtime/Composer;->changedInstance(Ljava/lang/Object;)Z

    move-result v3

    iget-object v4, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$onDismissRequest:Lkotlin/jvm/functions/Function0;

    invoke-interface {v7, v4}, Landroidx/compose/runtime/Composer;->changed(Ljava/lang/Object;)Z

    move-result v4

    or-int/2addr v3, v4

    iget-object v4, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$onDismissRequest:Lkotlin/jvm/functions/Function0;

    .line 167
    invoke-interface {v7}, Landroidx/compose/runtime/Composer;->rememberedValue()Ljava/lang/Object;

    move-result-object v5

    if-nez v3, :cond_3

    .line 168
    sget-object v3, Landroidx/compose/runtime/Composer;->Companion:Landroidx/compose/runtime/Composer$Companion;

    invoke-virtual {v3}, Landroidx/compose/runtime/Composer$Companion;->getEmpty()Ljava/lang/Object;

    move-result-object v3

    if-ne v5, v3, :cond_4

    .line 88
    :cond_3
    new-instance v3, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1$1$1;

    invoke-direct {v3, v1, v4}, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1$1$1;-><init>(Landroidx/compose/ui/focus/FocusManager;Lkotlin/jvm/functions/Function0;)V

    move-object v5, v3

    check-cast v5, Lkotlin/jvm/functions/Function1;

    .line 170
    invoke-interface {v7, v5}, Landroidx/compose/runtime/Composer;->updateRememberedValue(Ljava/lang/Object;)V

    .line 88
    :cond_4
    check-cast v5, Lkotlin/jvm/functions/Function1;

    invoke-interface {v7}, Landroidx/compose/runtime/Composer;->endReplaceGroup()V

    invoke-static {v2, v5}, Landroidx/compose/ui/input/key/KeyInputModifierKt;->onKeyEvent(Landroidx/compose/ui/Modifier;Lkotlin/jvm/functions/Function1;)Landroidx/compose/ui/Modifier;

    move-result-object v2

    .line 85
    iget-object v1, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$transitionState:Landroidx/compose/animation/core/MutableTransitionState;

    .line 86
    iget-object v3, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$enter:Landroidx/compose/animation/EnterTransition;

    .line 87
    iget-object v4, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$exit:Landroidx/compose/animation/ExitTransition;

    .line 114
    new-instance v8, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1$2;

    iget-object v9, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$modifier:Landroidx/compose/ui/Modifier;

    iget-object v10, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$menuFocusRequester:Landroidx/compose/ui/focus/FocusRequester;

    iget-object v11, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$shape:Landroidx/compose/ui/graphics/Shape;

    iget-wide v12, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$backgroundColor:J

    iget-object v14, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$contentPadding:Landroidx/compose/foundation/layout/PaddingValues;

    iget-object v15, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$transitionState:Landroidx/compose/animation/core/MutableTransitionState;

    iget-wide v5, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$contentColor:J

    move-object/from16 p2, v1

    iget-object v1, v0, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1;->$content:Lkotlin/jvm/functions/Function3;

    move-object/from16 v18, v1

    move-wide/from16 v16, v5

    invoke-direct/range {v8 .. v18}, Lcom/composeunstyled/DropdownMenuKt$DropdownMenuPanel$1$2;-><init>(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/focus/FocusRequester;Landroidx/compose/ui/graphics/Shape;JLandroidx/compose/foundation/layout/PaddingValues;Landroidx/compose/animation/core/MutableTransitionState;JLkotlin/jvm/functions/Function3;)V

    const/16 v1, 0x36

    const v5, 0x4f38e79f

    const/4 v6, 0x1

    invoke-static {v5, v6, v8, v7, v1}, Landroidx/compose/runtime/internal/ComposableLambdaKt;->rememberComposableLambda(IZLjava/lang/Object;Landroidx/compose/runtime/Composer;I)Landroidx/compose/runtime/internal/ComposableLambda;

    move-result-object v1

    move-object v6, v1

    check-cast v6, Lkotlin/jvm/functions/Function3;

    const/high16 v1, 0x30000

    sget v5, Landroidx/compose/animation/core/MutableTransitionState;->$stable:I

    or-int v8, v5, v1

    const/16 v9, 0x10

    const/4 v5, 0x0

    move-object/from16 v1, p2

    .line 84
    invoke-static/range {v1 .. v9}, Landroidx/compose/animation/AnimatedVisibilityKt;->AnimatedVisibility(Landroidx/compose/animation/core/MutableTransitionState;Landroidx/compose/ui/Modifier;Landroidx/compose/animation/EnterTransition;Landroidx/compose/animation/ExitTransition;Ljava/lang/String;Lkotlin/jvm/functions/Function3;Landroidx/compose/runtime/Composer;II)V

    invoke-static {}, Landroidx/compose/runtime/ComposerKt;->isTraceInProgress()Z

    move-result v1

    if-eqz v1, :cond_5

    invoke-static {}, Landroidx/compose/runtime/ComposerKt;->traceEventEnd()V

    :cond_5
    return-void
.end method
