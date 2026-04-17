.class public final synthetic Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lkotlin/jvm/functions/Function2;


# instance fields
.field public final synthetic f$0:Landroidx/compose/ui/Modifier;

.field public final synthetic f$1:Landroidx/compose/ui/graphics/Shape;

.field public final synthetic f$10:I

.field public final synthetic f$2:J

.field public final synthetic f$3:J

.field public final synthetic f$4:Landroidx/compose/foundation/layout/PaddingValues;

.field public final synthetic f$5:Landroidx/compose/foundation/gestures/Orientation;

.field public final synthetic f$6:Landroidx/compose/foundation/layout/Arrangement$Horizontal;

.field public final synthetic f$7:Landroidx/compose/ui/Alignment$Vertical;

.field public final synthetic f$8:Lkotlin/jvm/functions/Function3;

.field public final synthetic f$9:I


# direct methods
.method public synthetic constructor <init>(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/graphics/Shape;JJLandroidx/compose/foundation/layout/PaddingValues;Landroidx/compose/foundation/gestures/Orientation;Landroidx/compose/foundation/layout/Arrangement$Horizontal;Landroidx/compose/ui/Alignment$Vertical;Lkotlin/jvm/functions/Function3;II)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$0:Landroidx/compose/ui/Modifier;

    iput-object p2, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$1:Landroidx/compose/ui/graphics/Shape;

    iput-wide p3, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$2:J

    iput-wide p5, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$3:J

    iput-object p7, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$4:Landroidx/compose/foundation/layout/PaddingValues;

    iput-object p8, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$5:Landroidx/compose/foundation/gestures/Orientation;

    iput-object p9, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$6:Landroidx/compose/foundation/layout/Arrangement$Horizontal;

    iput-object p10, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$7:Landroidx/compose/ui/Alignment$Vertical;

    iput-object p11, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$8:Lkotlin/jvm/functions/Function3;

    iput p12, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$9:I

    iput p13, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$10:I

    return-void
.end method


# virtual methods
.method public final invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 16

    .line 0
    move-object/from16 v0, p0

    iget-object v1, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$0:Landroidx/compose/ui/Modifier;

    iget-object v2, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$1:Landroidx/compose/ui/graphics/Shape;

    iget-wide v3, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$2:J

    iget-wide v5, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$3:J

    iget-object v7, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$4:Landroidx/compose/foundation/layout/PaddingValues;

    iget-object v8, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$5:Landroidx/compose/foundation/gestures/Orientation;

    iget-object v9, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$6:Landroidx/compose/foundation/layout/Arrangement$Horizontal;

    iget-object v10, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$7:Landroidx/compose/ui/Alignment$Vertical;

    iget-object v11, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$8:Lkotlin/jvm/functions/Function3;

    iget v12, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$9:I

    iget v13, v0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda8;->f$10:I

    move-object/from16 v14, p1

    check-cast v14, Landroidx/compose/runtime/Composer;

    move-object/from16 v15, p2

    check-cast v15, Ljava/lang/Integer;

    invoke-virtual {v15}, Ljava/lang/Integer;->intValue()I

    move-result v15

    invoke-static/range {v1 .. v15}, Lcom/composeunstyled/TabGroupKt;->$r8$lambda$nDeimgKcVBIAPg6Q78NAL1sOSoE(Landroidx/compose/ui/Modifier;Landroidx/compose/ui/graphics/Shape;JJLandroidx/compose/foundation/layout/PaddingValues;Landroidx/compose/foundation/gestures/Orientation;Landroidx/compose/foundation/layout/Arrangement$Horizontal;Landroidx/compose/ui/Alignment$Vertical;Lkotlin/jvm/functions/Function3;IILandroidx/compose/runtime/Composer;I)Lkotlin/Unit;

    move-result-object v1

    return-object v1
.end method
