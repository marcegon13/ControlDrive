.class final Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;
.super Ljava/lang/Object;
.source "ScrollArea.kt"

# interfaces
.implements Landroidx/compose/ui/input/pointer/PointerInputEventHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1;->invoke(Landroidx/compose/ui/Modifier;Landroidx/compose/runtime/Composer;I)Landroidx/compose/ui/Modifier;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = null
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
.field final synthetic $currentDraggedInteraction$delegate:Landroidx/compose/runtime/State;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/compose/runtime/State<",
            "Landroidx/compose/runtime/MutableState<",
            "Landroidx/compose/foundation/interaction/DragInteraction$Start;",
            ">;>;"
        }
    .end annotation
.end field

.field final synthetic $currentInteractionSource$delegate:Landroidx/compose/runtime/State;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/compose/runtime/State<",
            "Landroidx/compose/foundation/interaction/MutableInteractionSource;",
            ">;"
        }
    .end annotation
.end field

.field final synthetic $currentSliderAdapter$delegate:Landroidx/compose/runtime/State;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/compose/runtime/State<",
            "Lcom/composables/core/SliderAdapter;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroidx/compose/runtime/State;Landroidx/compose/runtime/State;Landroidx/compose/runtime/State;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/compose/runtime/State<",
            "+",
            "Landroidx/compose/foundation/interaction/MutableInteractionSource;",
            ">;",
            "Landroidx/compose/runtime/State<",
            "+",
            "Landroidx/compose/runtime/MutableState<",
            "Landroidx/compose/foundation/interaction/DragInteraction$Start;",
            ">;>;",
            "Landroidx/compose/runtime/State<",
            "Lcom/composables/core/SliderAdapter;",
            ">;)V"
        }
    .end annotation

    iput-object p1, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentInteractionSource$delegate:Landroidx/compose/runtime/State;

    iput-object p2, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentDraggedInteraction$delegate:Landroidx/compose/runtime/State;

    iput-object p3, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentSliderAdapter$delegate:Landroidx/compose/runtime/State;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final invoke(Landroidx/compose/ui/input/pointer/PointerInputScope;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/compose/ui/input/pointer/PointerInputScope;",
            "Lkotlin/coroutines/Continuation<",
            "-",
            "Lkotlin/Unit;",
            ">;)",
            "Ljava/lang/Object;"
        }
    .end annotation

    .line 508
    new-instance v0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1$1;

    iget-object v1, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentInteractionSource$delegate:Landroidx/compose/runtime/State;

    iget-object v2, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentDraggedInteraction$delegate:Landroidx/compose/runtime/State;

    iget-object v3, p0, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1;->$currentSliderAdapter$delegate:Landroidx/compose/runtime/State;

    const/4 v4, 0x0

    invoke-direct {v0, v1, v2, v3, v4}, Lcom/composables/core/ScrollAreaKt$scrollbarDrag$1$1$1$1;-><init>(Landroidx/compose/runtime/State;Landroidx/compose/runtime/State;Landroidx/compose/runtime/State;Lkotlin/coroutines/Continuation;)V

    check-cast v0, Lkotlin/jvm/functions/Function2;

    invoke-static {p1, v0, p2}, Landroidx/compose/foundation/gestures/ForEachGestureKt;->awaitEachGesture(Landroidx/compose/ui/input/pointer/PointerInputScope;Lkotlin/jvm/functions/Function2;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;

    move-result-object p1

    invoke-static {}, Lkotlin/coroutines/intrinsics/IntrinsicsKt;->getCOROUTINE_SUSPENDED()Ljava/lang/Object;

    move-result-object p2

    if-ne p1, p2, :cond_0

    return-object p1

    :cond_0
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1
.end method
